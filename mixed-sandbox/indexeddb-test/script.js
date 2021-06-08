let db = '';
let reverseOrder = false;

// Сохраняем обращение к базе данных в переменную dbReq с именем myDB, версией 1
// Если базы данных не существует, она будет создана
/* let dbReq = indexedDB.open('myDB', 1); */
// Обновляем версию базы данных до 2, что бы вызвать событие upgradeneeded
dbReq = indexedDB.open('myDatabase', 2);

dbReq.addEventListener('upgradeneeded', (event) => {
  // Задаем переменной db ссылку на базу данных
  db = event.target.result;

  let notes = '';
  // Создаем хранилище объектов с именем notes
  if (!db.objectStoreNames.contains('notes')) {
    // Ключ у каждого объекта хранилища рассчитывается, об этом говорит настройка autoIncrement
    notes = db.createObjectStore('notes', { autoIncrement: true });
  } else {
    // Или получаем хранилище объектов с именем notes, если оно уже существует
    notes = dbReq.transaction.objectStore('notes');
  }

  // Если в notes еще нет индекса timestamp, создаем его
  if (!notes.indexNames.contains('timestamp')) {
    notes.createIndex('timestamp', 'timestamp');
  }
});

// Создаем функцию для отрисовки заметок на странице
const displayNotes = (notes) => {
  let note = '';
  let listHTML = `<ul>`;

  for (let i = 0; i < notes.length; i++) {
    note = notes[i];
    listHTML += `<li><span>${note.text}, ${new Date(
      note.timestamp,
    ).toDateString()}</span>`;
    listHTML += `<button class='button-delete' data-id=${note.timestamp}>X</button></li>`;
  }

  document.getElementById('notes').innerHTML = listHTML;
};

// Создаем функцию получения данных (всех заметок) с помощью курсора
const getAndDisplayNotes = (db) => {
  let tx = db.transaction(['notes'], 'readonly');
  let store = tx.objectStore('notes');

  // Получаем индекс заметок, что бы ниже запустить запрос курсора
  // Результаты будут упорядочены по метке времени
  let index = store.index('timestamp');

  // Создаем запрос курсора openCursor по индексу, а не по основному хранилищу объектов store
  let req = index.openCursor(null, reverseOrder ? 'prev' : 'next');
  let allNotes = [];

  // Обрабатываем запрос
  req.addEventListener('success', (event) => {
    // Результатом события success в запросах openCursor является IDBCursor
    let cursor = event.target.result;

    // Проверяем, что курсор не нулевой
    if (cursor !== null) {
      // Получем элемент и записываем его в массив
      allNotes.push(cursor.value);
      // Отправляем курсор со следующим элементом (заметкой) в начало события success
      cursor.continue();
    } else {
      // Если курсор нулевой (заметок больше нет), передаем массив заметок в обрабатывающую функцию для отрисовки на странице
      displayNotes(allNotes);
      console.log(typeof allNotes);
    }
  });

  // Обрабатываем ошибку, если возникает ошибка запроса курсора
  req.addEventListener('error', (event) => {
    console.log('error in cursor request ' + event.target.errorCode);
  });
};

// Создаем функцию добавления заметки
const addStickyNote = (db, message) => {
  // Запускаем транзакцию базы данных для записи данных в хранилище объектов notes
  let tx = db.transaction(['notes'], 'readwrite');
  console.log(db);
  // Получаем хранилище объектов notes из транзакции
  let store = tx.objectStore('notes');

  // Создаем заметку note как объект JavaScript
  let note = { text: message, timestamp: Date.now() };
  // Добавляем заметку note в хранилище объектов
  store.add(note);

  // Ожидаем завершения транзакции базы данных
  tx.addEventListener('complete', () => {
    console.log('stored note');
  });

  // Обрабатываем ошибку транзакции при ее возникновении
  tx.addEventListener('error', (event) => {
    console.log('error storing note ' + event.target.errorCode);
  });
};

// Получаем ссылку на базу данных после обновления страницы
dbReq.addEventListener('success', (event) => {
  db = event.target.result;

  // Создаем три заметки
  addStickyNote(db, 'Hello, World first time');
  addStickyNote(db, 'Hello, World second time');
  addStickyNote(db, 'Hello, World third time');

  /* Получение одной заметки по ключу */

  //Настраиваем хранилище объектов и транзакций
  let tx = db.transaction(['notes'], 'readonly');
  let store = tx.objectStore('notes');

  // Настраиваем запрос, что бы получить заметку с ключом 1
  let req = store.get(1);

  // Обрабатываем запрос
  req.addEventListener('success', (event) => {
    let note = event.target.result;

    if (note) {
    } else {
      console.log('note 1 not found');
    }
  });

  // Получаем данные (все заметки) с помощью курсора
  getAndDisplayNotes(db);

  // Обрабатываем ошибку, если заметка не существует в хранилище
  req.addEventListener('error', (event) => {
    console.log('error getting note 1 ' + event.target.errorCode);
  });
});

// Обрабатываем ошибку при ее возникновении
dbReq.addEventListener('error', (event) => {
  console.log('error opening database ' + event.target.errorCode);
});

/* Работа с DOM с заметками*/

// Ищем элементы на странице
const message = document.querySelector('#new-message');
const buttonAdd = document.querySelector('#button-add');
const buttonReverse = document.querySelector('#button-reverse');
const notesList = document.querySelector('#notes');

// Создаем функцию добавления заметки в базу данных по ссылке db для DOM
const submitNote = (message) => {
  addStickyNote(db, message.value);
  message.value = '';
};

// Обрабатываем конку добавления заметки
buttonAdd.addEventListener('click', () => {
  submitNote(message);
  getAndDisplayNotes(db);
});

// ----------------------------------------------

// Создаем функцию для выбора порядка отображения заметок в DOM
const flipNoteOrder = () => {
  reverseOrder = !reverseOrder;
  getAndDisplayNotes(db);
};

// Обрабатываем копку выбора отображения заметок
buttonReverse.addEventListener('click', flipNoteOrder);

// Создаем функцию удаления выбранной заметки из хранилища объектов и из DOM
const deleteNote = (event) => {
  // Получем признак выбранной записи
  // Атрибут data co значением timestamp выбранной заметки
  const valueTimeStamp = parseInt(event.target.getAttribute('data-id'));
  console.log(valueTimeStamp);

  // Открываем транзакцию чтения/записи БД, готовую к удалению данных
  const tx = db.transaction(['notes'], 'readwrite');

  // Обрабатываем завершение транзакции
  tx.addEventListener('complete', (event) => {
    console.log('Transaction complete');
    getAndDisplayNotes(db);
  });

  // Обрабатываем ошибку, если возникает ошибка завершения транзакции
  tx.addEventListener('error', () => {
    console.log('error in cursor request ' + event.target.errorCode);
  });

  // Создаем хранилище объектов по транзакции
  const store = tx.objectStore('notes');
  const index = store.index('timestamp');

  // Получаем ключ записи
  const req = index.getKey(valueTimeStamp);
  req.addEventListener('success', (event) => {
    const key = event.target.result;
    console.log(key);

    let deleteRequest = store.delete(key);
    deleteRequest.addEventListener('success', (event) => {
      // Обрабатываем успех запроса на удаление
      console.log('Delete request successful');
    });
  });
};

// Обрабатываем кнопку удаления заметки
notesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('button-delete')) {
    deleteNote(event);
  }
});

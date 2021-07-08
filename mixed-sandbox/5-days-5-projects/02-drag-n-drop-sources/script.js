const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragStart = (e) => {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
};

const dragEnd = (e) => {
  e.target.className = 'item';
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragEnter = (e) => {
  e.target.classList.add('entered');
};

const dragLeave = (e) => {
  e.target.classList.remove('entered');
};

const dropDrop = (e) => {
  e.target.classList.remove('entered');
  if (e.target === item) {
    return;
  } else {
    e.target.append(item);
  }
};

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dropDrop);
}

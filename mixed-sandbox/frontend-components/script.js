var collapsible = (elem, numberItems = 2) => {
  let state = { closed: true };

  let $elem = document.querySelector(elem);
  let $listItems = $elem.querySelectorAll('li');
  let $showMoreLink = $elem.querySelector('.show-more-link');

  let render = () => {
    state.closed
      ? ($showMoreLink.textContent = 'show more')
      : ($showMoreLink.textContent = 'show less');
  };

  // Добавляем классы для элементов "по умолчанию", видимых даже при сворачивании
  $listItems.forEach((item, index) => {
    if (index < numberItems) item.classList.add('default');
  });

  // Обрабатываем ссылку
  $elem.addEventListener('click', function (event) {
    if (!event.target.matches('.show-more-link')) return;
    state.closed ? (state.closed = false) : (state.closed = true);
    $elem.classList.toggle('open');
    $elem.classList.toggle('closed');
    render();
  });

  return $elem;
};

collapsible('#list1');
collapsible('#list2');

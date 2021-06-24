let fruits = [
  {
    id: 1,
    title: 'Apple',
    price: 20,
    img: './assets/img/apple.jpg',
  },
  {
    id: 2,
    title: 'Orange',
    price: 30,
    img: './assets/img/orange.jpg',
  },
  {
    id: 3,
    title: 'Mango',
    price: 40,
    img: './assets/img/mango.jpg',
  },
];

const toHTML = (fruit) => {
  return `      
    <div class="col">
      <div class="card">
        <img src="${fruit.img}" alt="" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <div class="buttons">
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">View price</a>
            <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
          </div>
        </div>
      </div>
    </div>
  `;
};

function render() {
  const html = fruits
    .map((fruit) => {
      return toHTML(fruit);
    })
    .join('');

  document.querySelector('#fruits').innerHTML = html;
}

render();

const priceModal = $.modal({
  title: 'Product price',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Close',
      type: 'primary',
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener('click', (e) => {
  e.preventDefault();
  const btnType = e.target.dataset.btn;
  const id = Number(e.target.dataset.id);
  const fruit = fruits.find((f) => {
    return f.id === id;
  });

  if (btnType === 'price') {
    priceModal.setContent(`
      <p>Price of ${fruit.title}: <strong>$${fruit.price}</strong></p>
    `);
    priceModal.open();
    console.log(fruit);
  } else if (btnType === 'remove') {
    $.confirm({
      title: 'Are you sure?',
      content: `<p>You remove the fruit: <strong>${fruit.title}</strong></p>`,
    })
      .then(() => {
        fruits = fruits.filter((f) => f.id !== id);
        render();
        console.log('Remove');
      })
      .catch(() => {
        console.log('Cancel');
      });
  }
});

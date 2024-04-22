const products = [
  { name: 'Amor Benamor', price: '95 DA', image: './images/item1.png', description: 'Amor Benamor Coudes N°04 500g' },
  { name: 'بورخا بالحجاب', price: '13000 DA', image: './images/item2.png', description: 'Description 1' },
  { name: 'عباية كرزية برخا', price: '20000 DA', image: './images/item3.png', description: 'Description 1' },
  { name: 'Product 4', price: '4500 DA', image: './images/item1.png', description: 'Description 1' },
  { name: 'Product 5', price: '9000 DA', image: './images/item2.png', description: 'Description 1' },
  { name: 'Product 6', price: '22000 DA', image: './images/item3.png', description: 'Description 1' },
  { name: 'Product 7', price: '7400 DA', image: './images/item1.png', description: 'Description 1' },
  { name: 'Product 8', price: '4500 DA', image: './images/item2.png', description: 'Description 1' },
  { name: 'Product 9', price: '22000 DA', image: './images/item3.png', description: 'Description 1' },
  { name: 'Product 10', price: '13000 DA', image: './images/item1.png', description: 'Description 1' },
  { name: 'Product 11', price: '9000 DA', image: './images/item2.png', description: 'Description 1' },
  { name: 'Product 12', price: '7400 DA', image: './images/item3.png', description: 'Description 1' }
];

const carousel = document.getElementById('carousel');
const overlay = document.getElementById('overlay');
const cartIcon = document.getElementById('cart-icon');
const cartItems = document.getElementById('cart-items');
const cartWindow = document.getElementById('cart-window');
const cartItemsContainer = document.getElementById('cart-items-container');

// Define cart as an array
let cart = [];

cartIcon.addEventListener('click', () => {
  cartWindow.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!cartWindow.contains(event.target) && event.target !== cartIcon) {
    cartWindow.classList.remove('show');
  }
});

function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.productId = product.name;

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.name;

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = product.name;

  const price = document.createElement('div');
  price.classList.add('price');
  price.textContent = product.price;

  const frame = document.createElement('button');
  frame.classList.add('frame');
  frame.addEventListener('click', (event) => {
    event.stopPropagation();
    addToCart(product);
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(frame);

  return card;
}

function addToCart(product) {
  cart.push(product); // Add item to the cart array
  saveCart(); // Save cart items to localStorage
  renderCart(); // Update the cart UI
}

function removeCartItem(index) {
  cart.splice(index, 1); // Remove item from the cart array
  saveCart(); // Save cart items to localStorage
  renderCart(); // Update the cart UI
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart)); // Save cart items to localStorage
}

function renderCart() {
  cartItemsContainer.innerHTML = ''; // Clear previous cart items
  cart.forEach((product, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.style.width = '290px';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement('div');
    name.textContent = product.name;
    name.style.fontWeight = 'bold';
    name.style.fontSize = '12px';

    const price = document.createElement('div');
    price.textContent = product.price;
    price.style.fontWeight = 'bold';
    price.style.color = '#009620';
    price.style.fontSize = '12px';
    price.style.marginLeft = '10px'

    const removeIcon = document.createElement('img');
    removeIcon.src = './icons/delete.png';
    removeIcon.alt = 'Remove';
    removeIcon.classList.add('remove');
    removeIcon.addEventListener('click', () => {
      removeCartItem(index);
    });

    cartItem.appendChild(img);
    cartItem.appendChild(name);
    cartItem.appendChild(price);
    cartItem.appendChild(removeIcon);

    cartItemsContainer.appendChild(cartItem);
  });

  // Update cart icon count
  cartItems.textContent = cart.length;
  cartWindow.classList.add('show');
}

function createCardContainer() {
  const container = document.createElement('div');
  container.classList.add('card-container');
  return container;
}

const productGroups = products.reduce((acc, product) => {
  const groupIndex = Math.floor(acc.length / 3);
  if (!acc[groupIndex]) {
      acc[groupIndex] = [];
  }
  acc[groupIndex].push(product);
  return acc;
}, []);

productGroups.forEach(group => {
  const cardContainer = createCardContainer();
  group.forEach(product => {
      const card = createCard(product);
      cardContainer.appendChild(card);
  });
  carousel.appendChild(cardContainer);
});

document.addEventListener('DOMContentLoaded', function () {
  // Retrieve cart items from localStorage on page load
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  renderCart(); // Render the cart items on page load
});


const searchInput = document.getElementById('search');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
}

function renderProducts(products) {
    carousel.innerHTML = ''; // Clear existing cards

    products.forEach(product => {
        const card = createCard(product);
        carousel.appendChild(card);
    });
}


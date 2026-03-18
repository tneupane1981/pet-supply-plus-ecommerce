// Navigation Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const valid = validateForm();
    if (!valid) {
        event.preventDefault();
        alert('Please fill in all required fields correctly.');
    }
});

function validateForm() {
    // Implement your validation logic here
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    requiredFields.forEach(field => {
        if (!field.value) {
            isValid = false;
        }
    });
    return isValid;
}

// Cart Management
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartDisplay = document.querySelector('.cart-display');
    cartDisplay.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerText = `${item.name} - ${item.price}`;
        cartDisplay.appendChild(cartItem);
    });
}

// Search Functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    filterItems(query);
});

function filterItems(query) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const itemName = item.querySelector('.item-name').innerText.toLowerCase();
        item.style.display = itemName.includes(query) ? 'block' : 'none';
    });
}

// Interactive Elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});

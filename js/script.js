// Get the cart button
const cartButton = document.querySelector('.cart-btn');

// Get the cart notification container
const cartNotification = document.querySelector('.cart-notification');

// Get the cart notification text
const cartNotificationText = document.querySelector('.cart-notification-text');

// Get the cart notification close button
const cartNotificationClose = document.querySelector('.cart-notification-close');

// Add an event listener to the cart button
cartButton.addEventListener('click', () => {
    // Show the cart notification
    cartNotification.style.display = 'block';
    
    // Set the cart notification text
    cartNotificationText.textContent = 'Item added to cart!';
    
    // Hide the cart notification after 2 seconds
    setTimeout(() => {
        cartNotification.style.display = 'none';
    }, 2000);
});

// Add an event listener to the cart notification close button
cartNotificationClose.addEventListener('click', () => {
    // Hide the cart notification
    cartNotification.style.display = 'none';
});
// Get the cart button
const cartButton = document.querySelector('.cart-btn');

// Get the cart notification container
const cartNotification = document.querySelector('.cart-notification');

// Get the cart notification text
const cartNotificationText = document.querySelector('.cart-notification-text');

// Get the cart notification close button
const cartNotificationClose = document.querySelector('.cart-notification-close');

// Add an event listener to the cart button
cartButton.addEventListener('click', () => {
    // Show the cart notification
    cartNotification.style.display = 'block';
    
    // Set the cart notification text
    cartNotificationText.textContent = 'Item added to cart!';
    
    // Hide the cart notification after 2 seconds
    setTimeout(() => {
        cartNotification.style.display = 'none';
    }, 2000);
});

// Add an event listener to the cart notification close button
cartNotificationClose.addEventListener('click', () => {
    // Hide the cart notification
    cartNotification.style.display = 'none';
});
// Get the item's name or description
const itemName = 'Example Item';

// Set the cart notification text
cartNotificationText.textContent = `${itemName} added to cart!`;
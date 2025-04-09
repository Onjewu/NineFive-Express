document.addEventListener('DOMContentLoaded', () => {
    const restaurants = [
        { id: 1, name: 'Salad Bar', logo: 'salad-logo.png', details: 'Fresh salads & more', menu: [
            { id: 101, name: 'Fresh Salad', price: 2.65, image: 'salad1.jpg', protein: 'Chicken' },
            { id: 102, name: 'Chicken Salad', price: 2.65, image: 'salad2.jpg', protein: 'Beef' },
            { id: 103, name: 'Crunchy Salad', price: 2.65, image: 'salad3.jpg', protein: 'Chicken' },
            { id: 104, name: 'Sesame Salad', price: 2.65, image: 'salad4.jpg', protein: 'Egg' }
        ]},
        { id: 2, name: 'Pizza Place', logo: 'pizza-logo.png', details: 'Delicious pizzas', menu: [
            { id: 201, name: 'Pepperoni', price: 3.00, image: 'pizza1.jpg', protein: 'Beef' },
            { id: 202, name: 'Margherita', price: 2.80, image: 'pizza2.jpg', protein: 'Chicken' },
            { id: 203, name: 'Vegetarian', price: 2.90, image: 'pizza3.jpg', protein: 'Egg' }
        ]},
        { id: 3, name: 'Burger Joint', logo: 'burger-logo.png', details: 'Tasty burgers', menu: [
            { id: 301, name: 'Beef Burger', price: 3.50, image: 'burger1.jpg', protein: 'Beef' },
            { id: 302, name: 'Chicken Burger', price: 3.20, image: 'burger2.jpg', protein: 'Chicken' },
            { id: 303, name: 'Egg Burger', price: 3.00, image: 'burger3.jpg', protein: 'Egg' }
        ]},
        { id: 4, name: 'Noodle House', logo: 'noodle-logo.png', details: 'Authentic noodles', menu: [
            { id: 401, name: 'Chicken Noodles', price: 4.00, image: 'noodle1.jpg', protein: 'Chicken' },
            { id: 402, name: 'Beef Noodles', price: 4.20, image: 'noodle2.jpg', protein: 'Beef' },
            { id: 403, name: 'Egg Noodles', price: 3.80, image: 'noodle3.jpg', protein: 'Egg' }
        ]},
    ];

    const restaurantList = document.getElementById('restaurantList');
    restaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.classList.add('restaurant-card');
        restaurantCard.innerHTML = `
            <img src="${restaurant.logo}" alt="${restaurant.name} Logo">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.details}</p>
        `;
        restaurantCard.addEventListener('click', () => showMenu(restaurant.id));
        restaurantList.appendChild(restaurantCard);
    });

    showMenu(restaurants[0].id);

    function showMenu(restaurantId) {
        const selectedRestaurant = restaurants.find(r => r.id === restaurantId);
        const popularDishes = document.getElementById('popularDishes');
        popularDishes.innerHTML = '';

        selectedRestaurant.menu.forEach(dish => {
            const dishElement = document.createElement('div');
            dishElement.classList.add('dish');
            dishElement.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p>₦${dish.price}</p>
                <p>Protein: ${dish.protein}</p>
                <button onclick="addToCart(${dish.id}, '${dish.name}', ${dish.price}, '${dish.image}')">+</button>
            `;
            popularDishes.appendChild(dishElement);
        });
    }

    const cart = [];
    let totalPrice = 0;

    window.addToCart = (dishId, dishName, dishPrice, dishImage) => {
        cart.push({ id: dishId, name: dishName, price: dishPrice, image: dishImage });
        totalPrice += dishPrice;
        updateCart();
    };

    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <span>₦${item.price}</span>
            `;
            cartItems.appendChild(itemElement);
        });

        document.getElementById('finalPrice').textContent = `₦${totalPrice.toFixed(2)}`;
        document.getElementById('finalTotal').textContent = `₦${totalPrice.toFixed(2)}`;
    }

    window.goToCheckout = () => {
        window.location.href = 'checkout.html';
    };

    // Greeting the customer
    const userName = prompt("Please enter your name:");
    if (userName) {
        const greeting = document.createElement('div');
        greeting.textContent = `Welcome, ${userName}!`;
        document.querySelector('header').prepend(greeting); // Add greeting to the top of the header
        greeting.style.backgroundColor = '#e0f7fa';
        greeting.style.padding = '8px';
        greeting.style.borderRadius = '4px';
        greeting.style.marginBottom = '10px';
    }
});
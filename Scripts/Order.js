document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const meal = document.getElementById("meal").value;
    const address = document.getElementById("address").value;

    alert(`Order placed successfully! \nName: ${name} \nMeal: ${meal} \nAddress: ${address}`);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
})
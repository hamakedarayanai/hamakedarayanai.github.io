// Get the sidebar element
var sidebar = document.getElementById("sidebar");

// Get the close button element
var closebtn = document.getElementById("closebtn");

// Get the show button element
var showbtn = document.getElementById("showbtn");

// Add a click event listener to the close button
closebtn.addEventListener("click", function() {
    // Toggle between hiding and showing the sidebar using a ternary operator
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
});

// Add a click event listener to the show button
showbtn.addEventListener("click", function() {
    // Show the sidebar
    sidebar.style.width = "250px";
});

// Add a click event listener to the document body
document.body.addEventListener("click", function(event) {
    // Check if the click was outside the sidebar and its toggle buttons
    if (event.target !== sidebar && event.target !== closebtn && event.target !== showbtn) {
        // Hide the sidebar
        sidebar.style.width = "0";
    }
});

// Add a keydown event listener to the document for keyboard accessibility
document.addEventListener("keydown", function(event) {
    // Check if the Esc key was pressed (key code 27)
    if (event.keyCode === 27) {
        // Hide the sidebar
        sidebar.style.width = "0";
    }
    // Check if the Tab key was pressed (key code 9)
    if (event.keyCode === 9) {
        // Prevent the default behavior of tabbing through elements
        event.preventDefault();
        // Get all the links in the sidebar
        var links = sidebar.getElementsByTagName("a");
        // Get the index of the currently focused link
        var index = Array.prototype.indexOf.call(links, document.activeElement);
        // Increment or decrement the index depending on whether the Shift key is held
        index = event.shiftKey ? index - 1 : index + 1;
        // Wrap around the index if it goes out of bounds
        index = (index + links.length) % links.length;
        // Focus on the next or previous link
        links[index].focus();
    }
});

/* WhatsApp Chat Functionality */
function openWhatsAppChat() {
    // Retrieve the phone number and message from the form
    let phoneNumber = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    
    // Remove non-digit characters from the phone number
    // (Ensure the number is in international format without a plus sign.)
    phoneNumber = phoneNumber.replace(/\D/g, '');
    
    // URL-encode the message text
    let encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp URL
    let url = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    if (message.trim() !== "") {
        url += "&text=" + encodedMessage;
    }
    
    // Open the URL in a new tab
    window.open(url, '_blank');
    
    // Prevent default form submission
    return false;
}

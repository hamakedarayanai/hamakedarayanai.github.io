// Get sidebar, close button, and show button elements
const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("closebtn");
const showbtn = document.getElementById("showbtn");

// Show sidebar when clicking the show button
showbtn.addEventListener("click", event => {
    sidebar.style.width = "250px";
    event.stopPropagation(); // Prevent body click event from triggering
});

// Hide sidebar when clicking the close button
closebtn.addEventListener("click", event => {
    sidebar.style.width = "0";
    event.stopPropagation();
});

// Close sidebar when clicking outside of it
document.body.addEventListener("click", event => {
    if (!sidebar.contains(event.target) && event.target !== showbtn) {
        sidebar.style.width = "0";
    }
});

// Prevent sidebar from closing when clicking inside it
sidebar.addEventListener("click", event => {
    event.stopPropagation();
});

// Keyboard accessibility for sidebar
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        sidebar.style.width = "0"; // Close sidebar on "Esc"
    }

    if (event.key === "Tab" && sidebar.style.width === "250px") {
        event.preventDefault(); // Prevent default tab behavior
        const links = sidebar.getElementsByTagName("a");
        let index = Array.prototype.indexOf.call(links, document.activeElement);
        index = event.shiftKey ? index - 1 : index + 1;
        index = (index + links.length) % links.length;
        links[index].focus();
    }
});

/**
 * Opens WhatsApp Chat with the provided phone number and message.
 */
function openWhatsAppChat() {
    const phoneNumber = document.getElementById("phone").value.trim().replace(/\D/g, '');
    const message = document.getElementById("message").value.trim();

    if (!phoneNumber) {
        alert("Please enter a valid phone number.");
        return false;
    }

    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    if (message) {
        url += `&text=${encodeURIComponent(message)}`;
    }

    window.open(url, '_blank');
    return false; // Prevent form submission
}
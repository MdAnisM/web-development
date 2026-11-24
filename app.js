
/* Activity 5: JavaScript Basics and User Interaction */

// Reusable Toast Notification
function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

// Smooth Scrolling Function
function scrollToBooking() {
    const bookingForm = document.getElementById("booking");

    if (bookingForm) {
        bookingForm.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        showToast("Redirected to ticket booking section!");
    }
}

// Handle Book Now buttons on the Match Schedule
document.querySelectorAll(".book-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        showToast("Opening ticket booking...");
    });
});

// When booking.html opens directly at #booking
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash === "#booking") {
        scrollToBooking();
    }
});

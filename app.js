
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



/* Activity 7: Live Booking Summary */

// Select booking form elements
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const ticketInput = document.getElementById("tickets");

// Select summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryPrice = document.getElementById("summaryPrice");
const summaryTotal = document.getElementById("summaryTotal");

// Check whether booking elements exist on this page
if (
    matchSelect &&
    standSelect &&
    ticketInput &&
    summaryMatch &&
    summaryStand &&
    summaryQuantity &&
    summaryPrice &&
    summaryTotal
) {

    // Function to update Booking Summary
    function updateBookingSummary(showNotification = true) {

        const match = matchSelect.value;
        const stand = standSelect.value;
        const quantity = Number(ticketInput.value) || 0;

        const price = Number(
            standSelect.options[standSelect.selectedIndex].dataset.price
        ) || 0;

        const total = price * quantity;

        // Update summary
        summaryMatch.textContent = match || "Not selected";
        summaryStand.textContent = stand || "Not selected";
        summaryQuantity.textContent = quantity;
        summaryPrice.textContent = "₹" + price.toLocaleString("en-IN");
        summaryTotal.textContent = "₹" + total.toLocaleString("en-IN");

        // Show notification
        if (showNotification) {
            showToast("Booking summary updated!");
        }
    }

    // Match selection
    matchSelect.addEventListener("change", function () {
        updateBookingSummary();
    });

    // Stand selection
    standSelect.addEventListener("change", function () {
        updateBookingSummary();
    });

    // Ticket quantity change
    ticketInput.addEventListener("input", function () {
        updateBookingSummary();
    });

    // Initial update without toast
    updateBookingSummary(false);
}




/* =================================
   ACTIVITY 8: RESPONSIVE INTERACTION
================================= */

// Hamburger Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });
}

// Team Filter
const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

if (teamFilter) {
    teamFilter.addEventListener("change", function () {
        const selectedTeam = teamFilter.value;

        matchCards.forEach(function (card) {
            const teams = card.dataset.teams;

            if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
}

// Grid and List View
const matchContainer = document.getElementById("matchContainer");
const gridViewBtn = document.getElementById("gridView");
const listViewBtn = document.getElementById("listView");

if (matchContainer && gridViewBtn && listViewBtn) {

    gridViewBtn.addEventListener("click", function () {
        matchContainer.classList.remove("list-view");
        matchContainer.classList.add("grid-view");
        showToast("Grid view enabled!");
    });

    listViewBtn.addEventListener("click", function () {
        matchContainer.classList.remove("grid-view");
        matchContainer.classList.add("list-view");
        showToast("List view enabled!");
    });
}


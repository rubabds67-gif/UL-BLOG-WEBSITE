const searchInput = document.getElementById("searchInput");
const blogCards = document.querySelectorAll(".blog-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    let visibleCards = 0;

    blogCards.forEach(function (card) {
        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
            visibleCards++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.hidden = visibleCards !== 0;
});

// Read More buttons
const readButtons = document.querySelectorAll(".read-btn");
const blogModal = document.getElementById("blogModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

readButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.title;
        modalText.textContent = button.dataset.text;
        blogModal.hidden = false;
    });
});

closeModal.addEventListener("click", function () {
    blogModal.hidden = true;
});

blogModal.addEventListener("click", function (event) {
    if (event.target === blogModal) {
        blogModal.hidden = true;
    }
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        "Thank you, " + name + "! Your form was checked successfully.";

    contactForm.reset();
});
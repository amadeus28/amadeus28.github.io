document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".restaurant-card");
    const modalTitle = document.getElementById("restaurant-title");
    const modalInfo = document.getElementById("restaurant-info");
    const modalImage = document.getElementById("restaurant-image");
    const infoModal = new bootstrap.Modal(document.getElementById("infoModal"));

    cards.forEach(card => {
        card.addEventListener("click", function () {
            modalTitle.textContent = this.dataset.name;
            modalInfo.innerHTML = `
                <strong>Address:</strong> 2123 Grilling Ave, Steakhouse District, Flavor Town, 56789<br>
                <strong>Contact:</strong> +(555) 123-4567<br>
                <strong>Open:</strong> 10AM - 10PM<br>
                <p class="modal-text">${this.dataset.info}</p>
            `;
            modalImage.src = this.querySelector("img").src; // Use the card's image
            infoModal.show();
        });
    });
});
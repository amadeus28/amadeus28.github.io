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
                <strong>Address:</strong> 235 Glendale Ave, Meriden City<br>
                <strong>Contact:</strong> +49 49 4000<br>
                <strong>Website:</strong> gandg.res<br>
                <strong>Open:</strong> 10AM - 10PM<br>
                <strong>Price:</strong> $$$
                <p class="modal-text">${this.dataset.info}</p>
            `;
            modalImage.src = this.querySelector("img").src; // Use the card's image
            infoModal.show();
        });
    });
});
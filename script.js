const input = document.getElementById("searchInput");

if (input) {
    input.addEventListener("keyup", function () {
        let filter = input.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            let text = card.textContent.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}
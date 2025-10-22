// Rotar frases en el héroe
const frases = [
    "Tu evento, nuestra pasión",
    "Creamos recuerdos inolvidables",
    "Organización profesional garantizada",
    "Hacemos de tu día algo único"
];

let i = 0;
const heroText = document.getElementById("hero-text");

setInterval(() => {
    i = (i + 1) % frases.length;
    heroText.textContent = frases[i];
}, 3000);

// Efecto en las tarjetas de servicios
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

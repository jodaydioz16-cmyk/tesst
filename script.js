
// =========================
// OPENING SCREEN
// =========================

const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

openButton.addEventListener("click", () => {

    opening.style.transition = "opacity 0.8s ease";
    opening.style.opacity = "0";

    setTimeout(() => {
        opening.classList.add("hidden");
        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createConfetti();

    }, 800);

});


// =========================
// SURPRISE BUTTON
// =========================

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {

    surpriseMessage.classList.remove("hidden");

    surpriseButton.textContent = "Surprise unlocked! ♡";
    surpriseButton.disabled = true;

    createConfetti();

});


// =========================
// CONFETTI ANIMATION
// =========================

function createConfetti() {

    const symbols = ["♡", "✦", "✨", "🎉", "💗"];

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("span");

        confetti.classList.add("confetti");

        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (Math.random() * 15 + 12) + "px";

        confetti.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6500);

    }

}

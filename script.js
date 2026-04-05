// Elements
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const loveScreen = document.getElementById("loveScreen");

// State
let moveCount = 0;
let activated = false;

// Move "No" button
function moveButton(event) {

    if (!activated) {
        activated = true;

        const rect = noBtn.getBoundingClientRect();

        noBtn.style.position = "fixed";
        noBtn.style.left = rect.left + "px";
        noBtn.style.top = rect.top + "px";
    }

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    let x, y;

    if (event && event.touches) {
        const touch = event.touches[0];
        x = touch.clientX + (Math.random() * 150 - 75);
        y = touch.clientY + (Math.random() * 150 - 75);
    } else {
        x = Math.random() * maxX;
        y = Math.random() * maxY;
    }

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    moveCount++;

    if (moveCount >= 6) {
        popup.style.display = "flex";
    }
}

// Events
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// YES button
yesBtn.addEventListener("click", () => {
    loveScreen.style.display = "flex";
});

// Close popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";

    noBtn.style.position = "relative";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";

    moveCount = 0;
    activated = false;
});

// HEARTS
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const hearts = ["💖","💘","💝","💗","💓"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);

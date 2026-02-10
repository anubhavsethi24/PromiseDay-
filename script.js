// Personalize text using names
const yourNameInput = document.getElementById("yourName");
const theirNameInput = document.getElementById("theirName");
const startBtn = document.getElementById("startBtn");
const finalQuestionText = document.getElementById("finalQuestionText");

startBtn.addEventListener("click", () => {
    const yourName = yourNameInput.value.trim() || "I";
    const theirName = theirNameInput.value.trim() || "you";

    document.querySelector(".subtitle").textContent =
        `${yourName} made this Promise Day surprise for ${theirName}.`;

    finalQuestionText.textContent =
        `${theirName}, will you let ${yourName.toLowerCase()} keep making a thousand tiny promises and keep them, every single day?`;

    // small scroll effect
    document.getElementById("promises").scrollIntoView({ behavior: "smooth" });
});

// Flip promise cards
document.querySelectorAll(".promise-card").forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

// Quiz reveal
const revealBtn = document.getElementById("revealMsgBtn");
const specialMessage = document.getElementById("specialMessage");

revealBtn.addEventListener("click", () => {
    specialMessage.classList.remove("hidden");
    showConfetti(40);
});

// Notes slider
const notes = [
    "I’m proud of you, more than you know.",
    "Thank you for making ordinary moments feel special.",
    "Your smile is my favorite notification.",
    "No matter how tough the day is, I’ll be there.",
    "Let’s write the kind of story people think is only in movies."
];

let currentNoteIndex = 0;
const noteText = document.getElementById("noteText");
const prevNoteBtn = document.getElementById("prevNote");
const nextNoteBtn = document.getElementById("nextNote");

function renderNote() {
    noteText.textContent = notes[currentNoteIndex];
}
renderNote();

prevNoteBtn.addEventListener("click", () => {
    currentNoteIndex =
        (currentNoteIndex - 1 + notes.length) % notes.length;
    renderNote();
});

nextNoteBtn.addEventListener("click", () => {
    currentNoteIndex = (currentNoteIndex + 1) % notes.length;
    renderNote();
});

// Final section buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    showConfetti(80);
    yesBtn.textContent = "Yay! 💖";
});

// Move "No" button away on hover
noBtn.addEventListener("mouseover", () => {
    const randomX = Math.random() * 200 - 100; // -100 to 100
    const randomY = Math.random() * 120 - 60;  // -60 to 60
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Simple confetti (emoji based)
const confettiContainer = document.getElementById("confetti-container");
function showConfetti(count = 30) {
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.textContent = ["💖", "💫", "✨", "💕"][
            Math.floor(Math.random() * 4)
        ];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Heart trail cursor effect
const heartTrailContainer = document.getElementById("heart-trail-container");

window.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("cursor-heart");
    heart.textContent = "❤";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heartTrailContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 800);
});

// Background music toggle
const bgMusic = document.getElementById("bgMusic");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const musicStatus = document.getElementById("musicStatus");

let isMusicPlaying = false;

musicToggleBtn.addEventListener("click", () => {
    if (!bgMusic) return;

    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
        musicToggleBtn.textContent = "🎵 Play Music";
        musicStatus.textContent = "Music is off";
    } else {
        bgMusic
            .play()
            .then(() => {
                isMusicPlaying = true;
                musicToggleBtn.textContent = "⏸ Pause Music";
                musicStatus.textContent = "Music is on";
            })
            .catch((err) => {
                console.error("Cannot play music:", err);
            });
    }
});


// Smooth scroll for nav links
document.querySelectorAll(".bottom-nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

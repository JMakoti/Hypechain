//navbar

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
//Hero

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero-container").classList.add("show-hero");
});
//Emoji
const emojiList = ["❤️", "💬", "👍", "🔔", "🤳", "🌐", "🔥","🎥"];

function spawnEmoji() {
    const container = document.querySelector(".floating-emojis");
    if (!container) return;

    // Create emoji element
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];

    // Random start position inside hero
    const startX = Math.random() * 100; 
    const startY = Math.random() * 100;

    emoji.style.left = startX + "%";
    emoji.style.top = startY + "%";

    // Random movement direction
    const moveX = (Math.random() * 200 - 100) + "%"; // -100% to +100%
    const moveY = (Math.random() * 200 - 100) + "%";

    emoji.style.setProperty("--move-x", moveX);
    emoji.style.setProperty("--move-y", moveY);

    container.appendChild(emoji);

    // Remove after animation
    setTimeout(() => emoji.remove(), 4000);
}

// spawn 1 emoji every 700–1500ms
setInterval(spawnEmoji, 700 + Math.random() * 800);


 //Why hypechain
 // Reveal animation on scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

//Video

// ===============================
// VIDEO SECTION REVEAL ANIMATION
// ===============================
const videoRevealEls = document.querySelectorAll(".video-reveal");

function videoRevealOnScroll() {
    videoRevealEls.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 120) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", videoRevealOnScroll);
window.addEventListener("load", videoRevealOnScroll);


// ===============================
// PARALLAX HOVER (VIDEO CARDS ONLY)
// ===============================
const videoCards = document.querySelectorAll(".video3-card");

videoCards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;

        card.style.transform = `scale(1.03) rotateX(${-y}deg) rotateY(${x}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
    });
});

// WHAT IS HYPECHAIN — Reveal Animation
const whReveal = document.querySelectorAll(".wh3-reveal");

function whScrollReveal() {
    whReveal.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 120) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", whScrollReveal);
window.addEventListener("load", whScrollReveal);

//How it works
// Fade-up animation on scroll
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// SCROLL REVEAL FOR ONLY THE WHY-MATTERS SECTION
function revealWhyMatters() {
    const items = document.querySelectorAll("#why-matters .fade-up");

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealWhyMatters);
window.addEventListener("load", revealWhyMatters);

// COUNTER ANIMATION (ONLY FOR SOCIAL PROOF)
function spAnimateCounters() {
    const counters = document.querySelectorAll("#social-proof .sp-number");
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText.replace("+", "");
            const increment = target / 40;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(update, 40);
            } else {
                counter.innerText = target + "+";
            }
        };
        update();
    });
}

// REVEAL + START COUNTERS ONCE
let spStarted = false;

function spReveal() {
    const items = document.querySelectorAll("#social-proof .sp-counter-card");
    const rect = document.querySelector("#social-proof").getBoundingClientRect();

    if (rect.top < window.innerHeight - 120 && !spStarted) {
        spStarted = true;
        spAnimateCounters();

        items.forEach((item, i) => {
            setTimeout(() => item.classList.add("active"), i * 150);
        });
    }
}

window.addEventListener("scroll", spReveal);
window.addEventListener("load", spReveal);

// FUTURE VISION SCROLL REVEAL (ISOLATED)
function fvReveal() {
    const items = document.querySelectorAll(".fv-fade");
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", fvReveal);
window.addEventListener("load", fvReveal);


/* ============================
   FUTURISTIC PINK NETWORK WEB
   ============================ */

const fwCanvas = document.getElementById("fw-network");
const fwCtx = fwCanvas.getContext("2d");

function fwResize() {
    fwCanvas.width = window.innerWidth;
    fwCanvas.height = document.querySelector("#future-path").offsetHeight;
}
fwResize();
window.addEventListener("resize", fwResize);

let fwParticles = [];

for (let i = 0; i < 50; i++) {
    fwParticles.push({
        x: Math.random() * fwCanvas.width,
        y: Math.random() * fwCanvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
    });
}

function fwAnimate() {
    fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);

    fwParticles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > fwCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > fwCanvas.height) p.vy *= -1;

        fwCtx.fillStyle = "#ff4fa8";
        fwCtx.beginPath();
        fwCtx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        fwCtx.fill();

        // Connect close particles
        fwParticles.forEach((p2) => {
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 140) {
                fwCtx.strokeStyle = "rgba(255, 80, 170, 0.15)";
                fwCtx.lineWidth = 1;
                fwCtx.beginPath();
                fwCtx.moveTo(p.x, p.y);
                fwCtx.lineTo(p2.x, p2.y);
                fwCtx.stroke();
            }
        });
    });

    requestAnimationFrame(fwAnimate);
}
fwAnimate();

/* REVEAL ON SCROLL */
function fwReveal() {
    const el = document.querySelector(".fw-reveal");
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
        el.classList.add("active");
    }
}

window.addEventListener("scroll", fwReveal);
window.addEventListener("load", fwReveal);


// Soft fade-in reveal
function ctaCleanReveal() {
    const cta = document.querySelector(".cta-clean-container");
    if (!cta) return;

    let pos = cta.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
        cta.style.opacity = "1";
        cta.style.transform = "translateY(0)";
    }
}

window.addEventListener("scroll", ctaCleanReveal);
window.addEventListener("load", () => {
    const cta = document.querySelector(".cta-clean-container");
    if (cta) {
        cta.style.opacity = "0";
        cta.style.transform = "translateY(40px)";
        cta.style.transition = "0.8s ease";
    }
    ctaCleanReveal();
});


// Reveal on scroll for founders section
function founders10Reveal() {
    document.querySelectorAll(".founders10-reveal").forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", founders10Reveal);
window.addEventListener("load", founders10Reveal);

//FAQS
// FAQ Accordion
document.querySelectorAll(".faq11-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const answer = item.querySelector(".faq11-answer");

        // Close all others
        document.querySelectorAll(".faq11-item").forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".faq11-answer").style.maxHeight = null;
            }
        });

        // Toggle current
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});


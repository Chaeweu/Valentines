// 🌸 Floating Petals
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 500);

// ✉ Envelope Open
function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");
    startTyping();
}

// 💕 Typewriter Effect
const message = `My love,

From the moment you came into my life,
everything became more beautiful.

You are my happiness,
my comfort,
my safe place.

I promise to love you today,
tomorrow,
and for all the days of my life.

Forever yours,
❤️`;

let index = 0;

function startTyping() {
    if (index < message.length) {
        document.getElementById("text").innerHTML += message.charAt(index);
        index++;
        setTimeout(startTyping, 40);
    }
}

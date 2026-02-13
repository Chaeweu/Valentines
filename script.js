const sections = document.querySelectorAll('.section');

/* Change section */
function showSection(id){
    sections.forEach(sec=>sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');

        // Animate ticket if going to RSVP section
    if(id === 'rsvp'){
        const ticket = document.querySelector('.ticket');
        setTimeout(()=> ticket.classList.add('show'), 300);
    }
}

/* Floating hearts */
const heartsContainer = document.getElementById("hearts-container");

setInterval(()=>{
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (15 + Math.random()*20) + "px";
    heartsContainer.appendChild(heart);
    setTimeout(()=> heart.remove(), 6000);
}, 400);

/* Explosion then auto flow */
function explodeHearts(){
    showSection("letter");

    const envelope = document.getElementById("envelope");

    // Open flap first
    setTimeout(()=>{
        envelope.classList.add("open");
    },500);

    // Show gallery button after animation
    setTimeout(()=>{
        document.getElementById("toGalleryBtn").style.display="inline-block";
    },3000);
}

/* Flip polaroid */
function flipCard(card){
    card.classList.toggle("flipped");
}

/* Autoplay music */
const bgMusic = document.getElementById("bg-music");

window.addEventListener('load', () => {
    bgMusic.volume = 0.2; // 0.0 = mute, 1.0 = max volume
    bgMusic.muted = false;
    bgMusic.play().catch(() => {
        document.body.addEventListener('click', () => bgMusic.play());
    });
});

// Valentine Popup Logic
const valPopup = document.getElementById("valentine-popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yesImage = document.getElementById("yesImage");

// Show popup on load
window.addEventListener('load', () => {
    valPopup.style.display = 'flex';
});

// Yes button click
yesBtn.addEventListener('click', () => {
    yesImage.style.display = 'block';
    setTimeout(() => {
        valPopup.style.display = 'none';
    }, 2000); // close after 2s showing image
});

// No button hover logic
let hoverCount = 0;
noBtn.addEventListener('mouseenter', () => {
    hoverCount++;
    if (hoverCount >= 5) {
        noBtn.style.display = 'none';
        return;
    }
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});
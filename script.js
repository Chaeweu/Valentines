const sections = document.querySelectorAll('.section');

/* Change section */
function showSection(id){
    sections.forEach(sec=>sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
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
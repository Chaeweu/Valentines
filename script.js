const sections = document.querySelectorAll('.section');

/* Smooth section change with envelope control */
function showSection(id){
    const current = document.querySelector('.section.active');
    const next = document.getElementById(id);

    if(current === next) return;

    const envelope = document.getElementById('envelope');

    // If leaving letter, close envelope first
    if(current.id === 'letter'){
        envelope.classList.remove('open'); // flap closes, letter-paper rises back
    }

    // fade out current
    current.style.opacity = 0;

    setTimeout(()=>{
        current.classList.remove('active');
        next.classList.add('active');
        next.style.opacity = 1;

        // If returning to letter, open envelope after fade in
        if(next.id === 'letter'){
            setTimeout(()=>{
                envelope.classList.add('open');
            }, 300); // give small delay after section fade
        }

    }, 500); // match CSS transition duration
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

/* Explosion from Home */
function explodeHearts(){
    const letterSection = document.getElementById("letter");
    const envelope = document.getElementById("envelope");

    // Show letter section with opacity 0 first
    letterSection.classList.add('active');
    letterSection.style.opacity = 0;

    // fade in letter section
    setTimeout(()=>{
        letterSection.style.opacity = 1;

        // Open envelope flap + pull letter-paper
        setTimeout(()=>{
            envelope.classList.add("open");
        }, 300);

    }, 100);

    // Show gallery button after envelope animation
    setTimeout(()=>{
        document.getElementById("toGalleryBtn").style.display = "inline-block";
    }, 2000);
}

/* Flip polaroid */
function flipCard(card){
    card.classList.toggle("flipped");
}

/* Autoplay music */
const bgMusic=document.getElementById("bg-music");

window.addEventListener('load',()=>{
    bgMusic.muted=false;
    bgMusic.play().catch(()=>{
        document.body.addEventListener('click',()=>bgMusic.play());
    });
});
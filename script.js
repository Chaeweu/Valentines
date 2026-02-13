const sections = document.querySelectorAll('.section');

function showSection(id){
    sections.forEach(sec=>sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

/* Floating hearts */
setInterval(()=>{
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*window.innerWidth+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
},400);

/* Explosion + go to letter */
function explodeHearts(){
    for(let i=0;i<40;i++){
        const heart=document.createElement("div");
        heart.classList.add("explode-heart");
        heart.innerHTML="❤️";
        heart.style.left="50%";
        heart.style.top="50%";
        heart.style.setProperty("--x",(Math.random()-0.5)*600+"px");
        heart.style.setProperty("--y",(Math.random()-0.5)*600+"px");
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),1000);
    }

    setTimeout(()=>{
        showSection('letter');
        openLetter();
    },800);
}

/* Envelope open + paper slide */
function openLetter(){
    const envelope=document.getElementById("envelope");
    envelope.classList.add("open");

    setTimeout(()=>{
        document.getElementById("toGalleryBtn").style.display="inline-block";
    },3000);
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
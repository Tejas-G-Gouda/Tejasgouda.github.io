const video2 = document.getElementById("gifVideo2");

video2.removeAttribute("controls");
video2.autoplay = true;
video2.loop = false; 
video2.muted = true; 
video2.play();


video2.addEventListener("ended", () => {
    setTimeout(() => {
        video2.currentTime = 0;
        video2.play();
    }, 1000); 
});
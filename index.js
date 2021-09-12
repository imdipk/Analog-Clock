var audio = new Audio('tick.mp3') ;

    function aplay() {
        audio.play();
    }
    setInterval(() => {
        
        aplay();
   }, 1000);



setInterval(() => {
    
    d = new Date();
    hr = d.getHours();
    mins = d.getMinutes();
    secs = d.getSeconds();
    hrotation = 30 * hr + mins / 2;
    mrotation = 6 * mins + secs / 10;
    srotation = 6 * secs;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);


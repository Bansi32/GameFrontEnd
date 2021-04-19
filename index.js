let urscore = 0;
let cross = true;

song = new Audio('mario.mp3');
song2 = new Audio('dead.mp3');
setTimeout(() => {
    song.play();
}, 1000);

document.onkeydown = function (e) {
    console.log(e.key);
    if (e.key == 'ArrowUp') {
        let bheem = document.querySelector('.bheem');
        bheem.classList.add('animateBheem');
        setTimeout(() => {
            bheem.classList.remove('animateBheem');
        }, 700);
    }
    if (e.key == 'ArrowRight') {
        let bheem = document.querySelector('.bheem');
        let bx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = bx + 122 + "px";
    }
    if (e.key == 'ArrowLeft') {
        let bheem = document.querySelector('.bheem');
        let bx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = (bx - 122) + "px";
    }
}

setInterval(() => {
    let bheem = document.querySelector('.bheem');
    let gameOver = document.querySelector('.gameOver');
    let kalia = document.querySelector('.kalia');

    let bx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
    let by = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('top'));
    let kx = parseInt(window.getComputedStyle(kalia, null).getPropertyValue('left'));
    let ky = parseInt(window.getComputedStyle(kalia, null).getPropertyValue('top'));

    let offsetX = Math.abs(bx - kx);
    let offsetY = Math.abs(by - ky);
    if (offsetX < 93 && offsetY < 52) {
        gameOver.innerHTML = "GAME OVER Refresh to Play";
        kalia.classList.remove('animatekalia');
        setTimeout(() => {
            song.pause();

        }, 1000);
        song2.play();
        setTimeout(() => {
            song2.pause();

        }, 3000);
    }
    else if (offsetX < 145 && cross) {
        urscore += 1;
        updatescore(urscore);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)

    }

}, 10);


function updatescore(s) {
    score.innerHTML = "Your Score: " + s;
}
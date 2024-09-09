const timeDisplay = document.querySelector('.time-display');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');


let milliSec = 0;
let secs = 0;
let mins = 0;

let timerID = null;

start.addEventListener('click', ()=>{
    if (timerID !== null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTime, 10);
})

stop.addEventListener('click', ()=>{
    clearInterval(timerID);
})

reset.addEventListener('click', ()=>{
    clearInterval(timerID);
    timeDisplay.innerHTML = `00:00:00`;
})


function startTime() {
    milliSec++;
    if (milliSec == 100) {
        milliSec = 0;
        secs++;

        if(secs == 60) {
            secs = 0;
            mins++;
        }
    }


    let milliSecString = milliSec < 10 ? `0${milliSec}` : milliSec;
    let secString = secs < 60 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;
    
    // if(milliSec < 10) {
    //     let milliSecString = `0${milliSec}`;
    // } else {
    //     milliSecString = milliSec;
    // }

    timeDisplay.innerHTML = `${minString}:${secString}:${milliSecString}`;


}
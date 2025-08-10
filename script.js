const timer = document.querySelector(".timer");
const StartBtn=document.querySelector(".start");
const StopBtn=document.querySelector(".stop");
const lapBtn = document.querySelector(".lap");
const resetBtn = document.querySelector(".reset");
const clearLapBtn = document.querySelector(".clear-lap");

const lapList = document.querySelector(".lap-list")
console.log(lapBtn);
console.log(StartBtn);
let hour=0;
let minute=0;
let second=0;
let milliSecond=0;
console.log(timer.textContent);


/*
StartStopResumeBtn.setInterval(() => {
    milliSecond++;
    if(milliSecond==999)
    {
        milliSecond=0;
        second++;
    }

    if(second==59)
    {
        second=0;
        minute++;
    }
    if(minute==59)
    {
        minute=0;
        hour++;
    }
    timer.textContent = `${(hour+'').padStart(2,0)}h: ${(minute+'').padStart(2,0)}m: ${(second+'').padStart(2,0)}s: ${(milliSecond+'').padStart(2,0)}ms`;
}, 1);*/

function stopWatch()
{
    milliSecond++;
    if(milliSecond==99)
    {
        milliSecond=0;
        second++;
    }

    if(second==59)
    {
        second=0;
        minute++;
    }
    if(minute==59)
    {
        minute=0;
        hour++;
    }
    timer.textContent = `${(hour+'').padStart(2,0)}h: ${(minute+'').padStart(2,0)}m: ${(second+'').padStart(2,0)}s: ${(milliSecond+'').padStart(2,0)}ms`;
}

let nIntervId;

function stopTimer() 
{
    StartBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    lapBtn.classList.add("hidden");
    StopBtn.classList.add("hidden");
    StartBtn.textContent="Resume";
    lapBtn.disabled=true;
    lapBtn.style.opacity=0.7;


    StartBtn.style.backgroundColor= "#00b7ff";

    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
}
    
function startTimer() 
{
    StopBtn.classList.remove("hidden");
    StartBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    lapBtn.classList.remove("hidden");
    lapBtn.disabled=false;
    lapBtn.style.opacity=1;

    // check if an interval has already been set up
    if (!nIntervId) {
      nIntervId = setInterval(stopWatch, 0);
    }
}

let count=1;
function addLap()
{
    const div = document.createElement("div");
    const data = `lap ${count++} <span>${(hour+'').padStart(2,0)}h: ${(minute+'').padStart(2,0)}m: ${(second+'').padStart(2,0)}s: ${(milliSecond+'').padStart(2,0)}ms</span>`;
    div.innerHTML=data;
    console.log(div);
    lapList.append(div);
}

function ResetTimer()
{
    lapBtn.classList.remove("hidden");
    StartBtn.classList.remove("hidden");
    StopBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    lapBtn.disabled=true;    lapBtn.style.opacity=0.7;
    lapList.textContent="";
    count=1;

    StartBtn.textContent="Start";
    StartBtn.style.backgroundColor="#ff9900";

    hour=0;
    minute=0;
    second=0;
    milliSecond=0;
    timer.textContent = `${(hour+'').padStart(2,0)}h: ${(minute+'').padStart(2,0)}m: ${(second+'').padStart(2,0)}s: ${(milliSecond+'').padStart(2,0)}ms`;
}

StartBtn.addEventListener("click", startTimer);
StopBtn.addEventListener("click",stopTimer);
lapBtn.addEventListener("click",addLap);
resetBtn.addEventListener("click", ResetTimer);
clearLapBtn.addEventListener("click", function()
{
    lapList.textContent='';
    count=1;
})


console.log("end");
var timer;
var hours=0;
var minutes=0;
var sec=0;
var mmsec=0;
var running = false;
var lapcount=1;


function start(){

    if (!running){
        running=true;
        timer=setInterval(update,10);
    }

}
 
function pause(){
    running=false;
    clearInterval(timer);

}

function Reset(){
    
    running=false;
    clearInterval(timer);
    hours=0;
    minutes=0;
    sec=0;
    mmsec=0;
    document.getElementsByClassName("time")[0].innerHTML="00:00:00:00" ;
    
    lapcount=1;
    clearlaptime();  
}


function Restart(){
Reset();
start();

}

function Lap(){
        var lapTime = newtime(hours) + ":" + newtime(minutes) + ":" + newtime(sec) + ":" + newtime(mmsec);
        var lapItem = document.createElement("li");
        lapItem.innerHTML = "Lap " + lapcount++ + ": " + lapTime; // Corrected lapcount++
        lapList.appendChild(lapItem);
    }
    


function resetlap(){

 clearlaptime();
 lapcount=1;  // Reset the lap counter

}


function update(){

    mmsec++;
    if(mmsec >= 100){
        mmsec=0;
        sec++;
    }
    if (sec >= 60){
        sec=0;
        minutes++;
    }
    if(minutes >= 60){
        minutes = 0;
        hours++;
    }
     document.getElementsByClassName("time")[0].innerHTML=newtime(hours) + ":" + newtime(minutes) + ":" + newtime(sec) + ":" + newtime(mmsec) ;
/**  [0] is used to access the first elemnt of time class and update the inner html */
}

function newtime(time){
    return ( time <10 ? "0" +time:time);

}


function clearlaptime(){
    var lapList = document.getElementById("lapList");
    lapList.innerHTML=' ';// clear laps time
}
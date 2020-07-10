

var hour=0;
var min=0;
var sec=0;
var millisec=0;
var hourheading=document.getElementById("hour");
var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var milliheading=document.getElementById("millisec");
var interval;
function timer(){
    millisec++
    milliheading.innerHTML=millisec;
    
    if(millisec>=100)
    {
        sec++;
        secheading.innerHTML=sec+":";
        millisec=0;
    }
    else if(sec>=60){
        min++
        minheading.innerHTML=min+":";
        sec=0;
    }
    else if(min>=60)
    hour++
    hourheading.innerHTML=hour+":";
    min=0;
      
}
function start()
{
interval=setInterval(timer,10)
document.getElementById("btn").disabled=true;





}
function stop(){
    clearInterval(interval);
    document.getElementById("btn").disabled=false;
   
    
}
function reset()
{
    stop();
    
    hour=0;
    min=0;
    sec=0;
    millisec=0;
   
    hourheading.innerHTML=hour+"0:";
    minheading.innerHTML=min+"0:";
    secheading.innerHTML=sec+"0:";
    milliheading.innerHTML=millisec+"0";
   
   
}
   


let display = document.getElementById('clock')
const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3")
audio.loop = true;
let alarmtime = null;
let alarmtimeout = null;


function update(){

    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText = `${hour} : ${minutes} : ${seconds}`

}

const Alarm = (value)=>{
    alarmtime = value;
    
}



function setAlarm(){

    clearTimeout(alarmtimeout)

  if(alarmtime){

    const current = new Date();
    const alarm = new Date(alarmtime);
    


    if(alarm>current){
        const timeout = alarm.getTime() - current.getTime();
        alarmtimeout = setTimeout(()=>audio.play(),timeout);   
        showAlarm(alarm.toLocaleString())
    }
  }
}

function showAlarm(newAlarm){

    document.getElementById('addAlarm').innerHTML = `<li>${newAlarm}  <button onClick="clearAlarm()" class="clearAlarm del">Clear Alarm</button>  </li><br><br>`;
    document.getElementById('addAlarm').style.color = 'red'  
}

function clearAlarm(){
    document.getElementById('addAlarm').style.display='none'
    audio.pause();
    if(alarmtimeout){
        clearTimeout(alarmtimeout);
        alert("alarm deleted")
    }
}


const formatTime = (time)=>{
    if(time<10){
        return '0'+time;
    }
    return time;
}



setInterval(update,1000);




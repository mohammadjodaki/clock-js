const span = document.querySelectorAll('#clock>span')
const timeClock = document.getElementById('time')
const setalarm = document.querySelector('button')
const select = document.querySelectorAll('select')
const alarm = new Audio('./audio/MyRingtone.IR_1582398713_4338.mp3')
const myClock = () =>{
    let time = new Date()
    let Hour = time.getHours()
    let Min = time.getMinutes()
    let Sec = time.getSeconds()
    span[0].style.transform = 'rotate('+ (((Hour * 3600) + (Min * 60) + Sec) * .00833) + 'deg)'
    span[1].style.transform = 'rotate('+ (((Min * 60) + Sec) * .1) +'deg)'
    span[2].style.transform = 'rotate('+ (Sec * 6) +'deg)'

    Hour = Hour < 10 ? '0' + Hour : Hour
    Min = Min < 10 ? '0' + Min : Min
    Sec = Sec < 10 ? '0' + Sec : Sec
    timeClock.innerHTML = `${Hour}:${Min}:${Sec}`

        if (`${Hour}:${Min}` === timealarm) {
        alarm.play()
        alarm.loop = true
    }
}
setInterval(myClock,0);
let timealarm
setalarm.addEventListener('click', () => {
    timealarm = `${select[0].value.padStart(2, '0')}:${select[1].value.padStart(2, '0')}`;
});

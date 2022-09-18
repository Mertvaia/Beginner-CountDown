const day_const = 1000*60*60*24
const hour_const = 1000*60*60
const min_const = 1000*60
const sec_const = 1000
let days = 0
let hours = 0
let minutes = 0
let seconds = 0
let stopper = 1
let pauseLock = 1
let timerID
let countdownBegun = false

let beginButton = document.getElementById("myButton")
let resetButton = document.getElementById("resetButton")
let pcButton = document.getElementById("pacoButton")

beginButton.addEventListener("click", beginCheck)

function beginCheck(){
    if(!countdownBegun){
        beginCD()
        countdownBegun = true
    }
    else{
        return
    }
}

/*function PaCo(){
    console.log("a")
    if(pcButton.innerHTML == "Pause"){
        pcButton.innerHTML = "Cont"
        clearInterval(timerID)
    }
    else if(pcButton.innerHTML == "Cont"){
        pcButton.innerHTML = "Pause"
        timerID = setInterval(beginCheck.countdown, 1000)
    }
}*/

function beginCD(){
    days = document.getElementById("no_days").value
    hours = document.getElementById("no_hours").value
    minutes = document.getElementById("no_mins").value
    seconds = document.getElementById("no_secs").value

    if(days != 0){
        hours = Number(hours) + Number(days)*24
    }
    timerID = setInterval(countdown, 1000)
    resetButton.addEventListener("click", () => stopper = 0)

    if(pauseLock){
        pcButton.addEventListener("click", PaCo)
        pauseLock = 0
    }

    console.log("b")
    function PaCo(){
        console.log("a")
        if(pcButton.innerHTML == "Pause"){
            pcButton.innerHTML = "Cont"
            clearInterval(timerID)
        }
        else if(pcButton.innerHTML == "Cont"){
            pcButton.innerHTML = "Pause"
            timerID = setInterval(countdown, 1000)
        }
    }

    function countdown(){
        if((seconds <= 0 && minutes <= 0 && hours <= 0 ) || stopper == 0){
            days = 0
            hours = "00"
            minutes = "00"
            seconds = "00"
            alert("Your time has come to end!")
            stopper = 1
            clearInterval(timerID)
            countdownBegun = false
            document.getElementById("countdown").innerHTML = `${hours}:${minutes}:${seconds}`
        }
        else{
            if(seconds <= 0){
                minutes -= 1
                seconds = 60
            }
            if(minutes < 0){
                hours -= 1
                minutes = 59
            }
            else{
                seconds -= 1;
                hours = zeroes(hours)
                if(hours[0]==0 && hours.length > 2){
                    hours = hours.slice(1)
                }
                minutes = zeroes(minutes)
                seconds = zeroes(seconds)
                document.getElementById("countdown").innerHTML = `${hours}:${minutes}:${seconds}`
            }
        }
    }

    function zeroes(tiem){
        tiem = tiem.toString()
        if(tiem.length == 0){
            return tiem = "00"
        }
        else if(tiem.length == 1){
            return tiem = "0" + tiem
        }
        else{
            return tiem
        }
    }
}
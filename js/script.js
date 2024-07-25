let leftarr = document.querySelector(".leftarr")
let rightarr = document.querySelector(".rightarr")
let date = new Date()
let main=document.querySelector("main")
let month = document.querySelector(".month")
function getMonthName(number) {
    switch (number) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
        default:
            break;
    }
}
function nextMonth() {
    date.setMonth(date.getMonth() + 1)
    month.innerHTML=`${getMonthName(date.getMonth())}${date.getFullYear()}`
    fillCalendar()
}
function prevMonth(){
    date.setMonth(date.getMonth()-1)
    month.innerHTML=`${getMonthName(date.getMonth())}${date.getFullYear()}`
    fillCalendar()
}
function fillCalendar(){
    main.innerHTML=``
    date.setMonth(date.getMonth()+1)
    console.log(date)
    date.setDate(0)
    let lengthOfMonth=date.getDate()
    date.setDate(1)
    console.log(date.getDay())
    let weekday=date.getDay()
    if(weekday==0){
        weekday=7
    }
    for(let i=0;i<weekday;i++){
        let day=document.createElement("div")
        day.classList.add("day")
        main.appendChild(day)
    }
    for(let i=1;i<lengthOfMonth;i++){
        let day=document.createElement("div")
        day.classList.add("day")
        day.innerHTML=i
        main.appendChild(day)
    }
}

leftarr.onclick=prevMonth
rightarr.onclick=nextMonth
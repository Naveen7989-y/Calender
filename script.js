/*In creation of the Calender project we firstday ofthe present month,
last day of the previous month, and we need the last day of this month*/
//const date = new Date();
const date = new Date();

const naveenscalender = () => {
    const currentDateElement = document.querySelector('#currentdate');
    const currenttimeelement = document.querySelector('#currenttime');
    const monthdays = document.getElementById('days');

    date.setDate(1); // sets the date to 1

    const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDay = date.getDay();

    const prevmonthlastday = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const presentmonthlastdayindex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nexxtdays = 7 - presentmonthlastdayindex - 1;

    function updatedatetime() {
        currentDateElement.innerHTML = `Current Date : ${new Date().toDateString()}`;
        currenttimeelement.innerText = `Current Time : ${new Date().toLocaleTimeString()}`;
    }

    updatedatetime();
    setInterval(updatedatetime, 1000);

    const month = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    document.querySelector('#subminis h2').innerHTML = month[date.getMonth()];
    document.querySelector('#subminis p').innerHTML =new Date().toDateString();

    let days = "";

    
    for (let x = firstDay; x > 0; x--) {
        days += `<div class="prevmonthlastday">${prevmonthlastday - x + 1}</div>`;
    }

    
    
    for (let i = 1; i <= lastday; i++) {
        let currentDate = new Date(); // Get current date once

        if (i == currentDate.getDate() && date.getMonth() === currentDate.getMonth()) {
            days += `<div id="todaydate222">${i}</div>`;
                } else {
            days += `<div>${i}</div>`;
        }
    
    }

    
    for (let j = 1; j <= nexxtdays; j++) {
        days += `<div class="nextday">${j}</div>`;
    }

    monthdays.innerHTML = days;
};

naveenscalender();

document.querySelector("#prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    naveenscalender();
});

document.querySelector("#next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    naveenscalender();
});

const output = document.getElementById("output");

output.innerHTML = "--- Level 1_1 ---<br><br>";

let date1, date2, date3, date4;
date1 = new Date("September 2, 2019 09:00:00");
date2 = new Date(0);
date3 = new Date(31556908800);
date4 = new Date(86400000);

output.innerHTML += date1 + "<br>";
output.innerHTML += date2 + "<br>";
output.innerHTML += date3 + "<br>";
output.innerHTML += date3 + "<br><br>";

output.innerHTML += "--- Level 1_2 ---<br><br>";

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let dateTime = new Date;

output.innerHTML += dateTime + "<br>";
output.innerHTML += dateTime.getFullYear() + "<br>";
output.innerHTML += `${dateTime.getMonth()} ${monate[dateTime.getMonth()]} <br>`;
output.innerHTML += `${dateTime.getDay()} ${wochenTag[dateTime.getDay()]} <br>`;
output.innerHTML += `${dateTime.getHours()} Stunde <br>`;
output.innerHTML += `${dateTime.getMinutes()} Minute <br>`;
output.innerHTML += wochenTag[dateTime.getDay()] + "<br>";
output.innerHTML += monate[dateTime.getMonth()] + "<br><br><br>";

class WatchContainer {
    constructor(d, h, m, s, p) {
        this.day = d;
        this.hour = h;
        this.minute = m;
        this.second = s;
        this.period = p;
    }
    daysInMonth(m, y) {
        return new Date(y, m, 0).getDate();
    }
    getMonthName(d, m, y) {
        return monate[new Date(y,m-1,d).getMonth()];
    }
    isWeekend(d, m, y){
        let day = new Date(y,m-1,d).getDay();
        return (day == 6 || day == 0 ? "Weekend" : "Working Day");
    }
}

let day = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

const watch = new WatchContainer(
    document.getElementById("day"),
    document.getElementById("hour"),
    document.getElementById("minute"),
    document.getElementById("second"),
    document.getElementById("period")
);
watch.day.innerHTML = day[dateTime.getDay()];
watch.hour.innerHTML = dateTime.getHours();
watch.minute.innerHTML = dateTime.getMinutes();
watch.second.innerHTML = dateTime.getSeconds();
watch.period.innerHTML = dateTime.toLocaleString('en-US', { hour12: true }).slice(-2);

output.innerHTML += "--- Level 1_3 ---<br><br>";

let today = new Date();
let tmp = new Date();

tmp.setFullYear(today.getFullYear() + 200)
output.innerHTML += tmp + "<br>";

tmp.setDate(today.getDate() + 30);
output.innerHTML += tmp + "<br><br>";

output.innerHTML += "--- Level 1_4 ---<br><br>";
/* im watchContainer hinzugefügt */
output.innerHTML += watch.daysInMonth(2, 2021) + "<br><br>";

output.innerHTML += "--- Level 1_5 ---<br><br>"
output.innerHTML += watch.getMonthName(1, 2, 2021) + "<br><br>";

output.innerHTML += "--- Level 1_6 ---<br><br>";
output.innerHTML += "Um AM oder PM nach englischem Format zu erhalten: ";
output.innerHTML += `"toLocaleString('en-US', { hour12: true }).slice(-2)"<br><br>`;

output.innerHTML += "--- Level 1_6 ---<br><br>";
output.innerHTML += watch.isWeekend(15,12,2019)+"<br>";
output.innerHTML += watch.isWeekend(18,12,2019)+"<br>";
output.innerHTML += watch.isWeekend(03,09,2021)+"<br>";
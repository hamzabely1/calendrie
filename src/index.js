
let ora = document.getElementById("ora")
let dayh= document.getElementsByClassName("days")
let input = document.getElementById("input")
let date = new Date();

let body = document.getElementById("body")









class calendier{
  constructor(jour,mois,samain,anne){
    this.jour = jour ="h"
    this.mois =mois
    this.samain =samain
    this.anne =anne



  }



} 

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months =["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]


  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 1; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate()  &&
      date.getMonth() === new Date().getMonth() 
    ) {
      days += `<div  data-bs-toggle="modal"  data-bs-target="#exampleModal" class="today">${i}</div>`;
    } else {
      days += `<div data-bs-toggle="modal"  data-bs-target="#exampleModal">${i}</div>`;
    
    
}
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div  data-bs-toggle="modal"  data-bs-target="#exampleModal" class="next-date" >${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();


console.log(dayjs());


let y = dayjs()

ora.innerHTML = y.$H+":"+y.$m;

let buttonsave = document.getElementById("buttonsave")

buttonsave.addEventListener("click",save)


//

function save() {
  let evenement = document.createElement("div")
  body.appendChild(evenement)

let diveven = document.createElement("div")
let but = document.createElement("button")
diveven.style.height= "100px"
diveven.style.width ="400px"
diveven.style.border="solid orange 5px"
diveven.style.borderRadius = "10px"

but.style.height ="50px"
but.style.width ="50px"
but.style.background ="black"

evenement.appendChild(diveven)
diveven.appendChild(but)
let dato= document.getElementById("dato")
localStorage.setItem("text",text.value)
localStorage.setItem("dato",dato.value)

diveven.innerHTML = localStorage.getItem("text")+"<br>"+localStorage.getItem("dato")
let button1 = document.getElementById("button1")

button1.addEventListener("click",fermeven)

function fermeven() {
    evenement.innerHTML=""

}

}



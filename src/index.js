
let ora = document.getElementById("ora")
let evenement = document.getElementById("evenment")
let dayh= document.getElementsByClassName("days")
let input = document.getElementById("input").valeu
let date = new Date();

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

function save() {

let diveven = document.createElement("div")
diveven.style.height= "50px"
diveven.style.width ="500px"
diveven.style.border="solid black 1px"

evenement.appendChild(diveven)
}



let jour = document.getElementById("jour")
let moi = document.getElementById("moi")
let time = document.getElementById("time")
let evenment = document.createElement("div")
let div = document.createElement("div")
let body = document.getElementById("body")
let prossimo = document.getElementById("prossima")
let input = document.createElement("input")
let num = 32
let mois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]




for (let i = 1; i < num; i++) {
jour.innerHTML += `<div id = jours> ${i} </div>`
}
jour.addEventListener("click",modal)




function modal() {
    body.appendChild(evenment)
    evenment.style.border ="solid 2px black"
    evenment.style.height="100px"
    evenment.style.width ="100px"
    evenment.style.borderRadius ="10px"
    evenment.style.position ="absolute"
    evenment.style.top = "300px"
    evenment.style.left ="100px"
    evenment.style.background="white"
    evenment.appendChild(input)
    input.style.height = "95px"
    input.style.width ="95px"
    input.style.borderRadius ="10px"

}


moi.innerHTML = mois[0]


let day = new Date()
time.innerHTML = day.getFullYear() ,day.getDate




let m = 0

if (m == 2)  {
    alert("capo")
}

prossimo.addEventListener("click",pro)
precedente.addEventListener("click",pre)


function pro() {
    m +=1;
    moi.innerHTML = mois[m];


    if (m == 1) {
        jour.innerHTML = ""
        num = 30
        for (let i = 1; i < num; i++) {
            jour.innerHTML += `<div id = jours> ${i} </div>`
        }
    }
    if (m == 0) {
        jour.innerHTML = ""
        num = 32
        for (let i = 1; i < num; i++) {
            jour.innerHTML += `<div id = jours> ${i} </div>`
        }
    }
if (m == 2) {
    
}

}

function pre() {
    m -=1;
    moi.innerHTML = mois[m];


    if (m == 1) {
       
        num = 30
        jour.innerHTML = ""
        for (let i = 1; i < num; i++) {
            jour.innerHTML += `<div id = jours> ${i} </div>`
        }
    }
if (m == 3) {
    num = 30
    jour.innerHTML = ""
    for (let i = 1; i < num; i++) {
        jour.innerHTML += `<div id = jours> ${i} </div>`
    }
}
if (m == 0) {
    jour.innerHTML = ""
    num = 32
    for (let i = 1; i < num; i++) {
        jour.innerHTML += `<div id = jours> ${i} </div>`
    }
}
}


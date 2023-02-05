
let count = 0
let welcomeEl = document.getElementById("welcomeEl")

let _name = "Priyanshu"
let greeting = "Welcome Amaze! "

welcomeEl.innerText = greeting + _name



function increment(){
    count++
    document.getElementById("count-el").textContent = count
}

function save(){
    let saves = document.getElementById("displaySaves")
    saves.innerText += count + "->"
    count = 0
    document.getElementById("count-el").innerText = count;
}




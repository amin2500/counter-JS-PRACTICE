let inbutton = document.getElementById("inbutton")
let debutton = document.getElementById("debutton")
let resetbutton = document.getElementById("reset-button")
let displaycontent = document.getElementById("display__content")
let count = 0

inbutton.onclick = function(){
    count++
    displaycontent.textContent = count
}

debutton.onclick = function(){
    count--
    displaycontent.textContent = count
}

resetbutton.onclick = function(){
    count = 0
    displaycontent.textContent = count
}
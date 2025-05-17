let open = document.querySelector(".btn2")
let invent = ""
let digl_names = ['awp1.png', 'awp2.png', 'awp3.png', 'awp4.png', "awp5.png"]
let gun = digl_names[getRandomInt(4)]
open.addEventListener("click",function(){
let card_list = document.querySelector('.cas')
var el = document.getElementById("div-02");
el.remove()
let cell = document.createElement("div")
let imag = document.createElement("img")
imag.setAttribute("src",gun)
imag.classList.add("imag")
cell.classList.add("card")
cell.appendChild(imag)
card_list.appendChild(cell)
let key = localStorage.getItem('username');
let name = localStorage.getItem(key);
if (name == null){
  invent += gun + ";"
  localStorage.setItem(key, invent);
}else{
  invent += name + gun + ";"
  localStorage.setItem(key, invent);
}
let b = document.getElementById('buttonId');
b.remove()
let but = document.querySelector(".cas2")
let bell = document.createElement("button")
let a = document.createElement("a")
bell.classList.add("btn3")
but.appendChild(a)
a.appendChild(bell)
a.setAttribute("href", "indexSamat.html")
bell.id = "buttonId"

document.getElementById('buttonId').innerText = 'Get'
// for (let i = 0; i < digl_names.length; i += 1) {
//     let cell = document.createElement("div")
//     let imag = document.createElement("img")
//     imag.setAttribute("src",digl_names[i])
//     imag.classList.add("imag")
//     cell.classList.add("card")
//     cell.appendChild(imag)
//     card_list.appendChild(cell)
    
// }
})
// let invent = ""
// let op = document.querySelector(".btn3")
// op.addEventListener("click",function(){
// invent += gun + ";"
// let key = localStorage.getItem('username');
// localStorage.setItem(key, invent);
// alert( localStorage.getItem(key) );
// })
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
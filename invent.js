let key = localStorage.getItem('username');
let name = localStorage.getItem(key);
let result = name.split(";");
let card_list = document.querySelector('.cas')
for (let i = 0; i < (result.length-1); i += 1) {
    let cell = document.createElement("div")
    let imag = document.createElement("img")
    imag.setAttribute("src",result[i])
    imag.classList.add("imag")
    cell.classList.add("card")
    cell.appendChild(imag)
    card_list.appendChild(cell)
    
}
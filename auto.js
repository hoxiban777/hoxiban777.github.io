let open = document.querySelector('.btn2')

open.addEventListener("click", function(){
    let elem = document.getElementById('elem').value;
    let key = localStorage.getItem('username');
    localStorage.setItem('username', elem)
})
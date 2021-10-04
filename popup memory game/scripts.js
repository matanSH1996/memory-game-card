let name = document.getElementsByClassName('text');
let button = document.getElementById('product').addEventListener('click', popup)

function popup () {
    let button = [];
    for(let i = 0; i < name.length; i++){
        button[i] = Input[i].value;
    }
    addData (user);
}

function addData (user) {
    let Field = document.getElementsById('product');
    for(i = 0; i < Input.length; i++) {
        Field[i].innerHTML += button[i];
    }
}

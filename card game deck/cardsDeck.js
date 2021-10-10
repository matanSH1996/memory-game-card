const cards = document.querySelectorAll('.cards-container');
for (let card of cards) {
  card.addEventListener('click', (event) => {
    card.classList.toggle('flippedCard');
  });
}

window.addEventListener('load',() => {

  const params = (new URL(document.location)).searchParams;
  const name = params.get('nameofuser');
  const mail = params.get('email');

  document.getElementById('writename').innerHTML = name;
  document.getElementById('writemail').innerHTML = mail;

} )

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (++timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  let fiveMinutes = 60 * 0,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};


let popup = document.getElementById('popup');
  window.addEventListener('load', (event) =>{
    setTimeout( () =>{
      popup.style.display = 'block';
  }, 5000);
  });

  Input = document.getElementsByClassName('text');
let user = document.getElementById('popup').addEventListener('load', Data);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const first_name = urlParams.get('writename')

if(urlParams.has('writename'))
first_name = urlParams.get('first_name')

let name_span = document.getElementById('first_name');
name_span.innerText = first_name;


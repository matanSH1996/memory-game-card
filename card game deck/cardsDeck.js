// let card = document.getElementsByClassName('card-container');

// card.addEventListener('click', function() {
//   card.classList.toggle('flippedCard');
// });

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

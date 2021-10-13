const cards = document.getElementsByClassName('cards-container');
const test = Array.from(cards)
let flag = 0;
let score = 0
let nope = 0;
test.forEach(item => {
  item.addEventListener('click', eventParams)
})

function eventParams (event) {
  let fliped = event.target.parentElement
  fliped.classList.toggle('flippedCard');
  fliped.classList.toggle('isFlipped');
  fliped.data

  game();
}

function game () {
  let check = document.getElementsByClassName('isFlipped')
  let checkArr = Array.from(check)
  for(let i = 0; i < checkArr.length; i++){
    for(let j = i + 1; j < checkArr.length; j++){
      if(checkArr[i].children[0].src == checkArr[j].children[0].src && checkArr[i].classList.contains('isFlipped') && checkArr[j].classList.contains('isFlipped'))  {
        flag ++
        console.log('yes')
        if(flag == 1){
          console.log(checkArr[i])
          checkArr[i].removeEventListener('click', eventParams);
          checkArr[j].removeEventListener('click', eventParams)
          checkArr[i].classList.toggle('isFlipped');
          checkArr[j].classList.toggle('isFlipped');
          score ++
          flag = 0
        }
      } else nope ++
    }
    if(nope == 1) {
      setTimeout(() => {
        checkArr.forEach(item => {
          item.classList.toggle('flippedCard')
          item.classList.toggle('isFlipped');
        })
      }, 1000);
      nope = 0
    }
  }
  myFunction()
}


window.addEventListener('load',() => {

  const params = (new URL(document.location)).searchParams;
  const name = params.get('nameofuser');
  const mail = params.get('email');

  document.getElementById('writename').innerHTML = name;
  document.getElementById('writemail').innerHTML = mail;
  
  localStorage.setItem("username", name);
  localStorage.setItem("usermail", mail);

} )

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
    
      document.getElementById("timer").innerHTML = minutes + ":" + seconds;

      if (startTimer = ++timer < 0) {
          timer = duration;
      }
  }, 1000);
} 

window.onload = function () {
  let fiveMinutes = 60 * 0,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

function myFunction() {
  let popup = document.getElementById("popup");
  if(score == 6){
    popup.style.display = 'block';
    document.getElementById("name_of_user").innerHTML = localStorage.getItem("username");
    document.getElementById("mail_of_user").innerHTML = localStorage.getItem("usermail");
    document.getElementById("time").innerHTML = localStorage.getItem("timer");
    let closePopup = document.querySelector("#close")
    closePopup.addEventListener('click', (event) => {
    popup.style.display = 'none';
    })
  }
};

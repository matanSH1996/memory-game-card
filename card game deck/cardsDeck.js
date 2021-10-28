const cards = document.getElementsByClassName('cards-container');
const test = Array.from(cards)
let flag = 0;
let score = 0;
let nope = 0;
let lookbord = false;
shuffle();
test.forEach(item => {
  item.addEventListener('click', eventParams)
})

function eventParams (event) {
  if (lookbord) return;
  let fliped = event.target.parentElement
  fliped.classList.toggle('flippedCard');
  fliped.classList.toggle('isFlipped');
  fliped.data

  game();
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

window.onload = function () {
  Interval = setInterval(startTimer, 1000);
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
          document.getElementById('score').innerHTML = score;
          flag = 0
        }
      } else nope++
    }
      if(nope == 1) {
        lookbord = true;
        setTimeout(() => {
          checkArr.forEach(item => {
            item.classList.toggle('flippedCard')
            item.classList.toggle('isFlipped');
          })
          lookbord = false;
        }, 1000);
        nope = 0
      }
    }
  myFunction()
}

let minutes = 00; 
let seconds = 00; 
let appendseconds = document.getElementById("seconds")
let appendminutes = document.getElementById("minutes")
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let Interval ;

buttonStart.onclick = function() {
  
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
}

  buttonStop.onclick = function() {
    clearInterval(Interval);
}

function startTimer () {
  seconds++; 
  
  if (seconds < 10){
    appendseconds.innerHTML = "0" + seconds;
  }
  
  if (seconds > 9){
    appendseconds.innerHTML = seconds;
    
  } 
  
  if (seconds > 59) {
    minutes++;
    appendminutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendseconds.innerHTML = "0" + seconds;
  }
}

function resetTimer() {
  clearInterval(Interval);
    seconds = "00";
    minutes = "00";
    appendseconds.innerHTML = seconds;
    appendminutes.innerHTML = minutes;
    Interval = setInterval(startTimer, 1000);
};

buttonReset.addEventListener('click', restart);

function restart(){

  for (let card of cards) {
    if (card.classList.contains('flippedCard')){
      card.classList.toggle('flippedCard');
      card.addEventListener('click', eventParams);
    }

    if (card.classList.contains('isFlipped')){
      card.classList.toggle('isFlipped');
      card.addEventListener('click', eventParams);
    }

  setTimeout(() => {shuffle()}, 1000);  
  score =0;
  document.getElementById('score').innerHTML = score;
 
  clearInterval(Interval);
  setTimeout(() => {resetTimer()}, 1000); 
   
  }
}

function shuffle(){
  for (let card of cards) {
    let randomindex = Math.floor(Math.random() * cards.length);
    card.style.order = randomindex;
  }
}

function myFunction() {
  let popup = document.getElementById("popup");
  if(score == 6){
    if(minutes < 9) {
      minutes = "0" + minutes
    };
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
    clearInterval(Interval);
    popup.style.display = 'block';
    document.getElementById("name_of_user").innerHTML = localStorage.getItem("username");
    document.getElementById("mail_of_user").innerHTML = localStorage.getItem("usermail");
     document.getElementById("time_of_user").innerHTML = localStorage.getItem("minutes")+':'+localStorage.getItem("seconds");
     document.getElementById("name_user").innerHTML = localStorage.getItem("username");
     document.getElementById("mail_user").innerHTML = localStorage.getItem("usermail");
     document.getElementById("score_of_user").innerHTML = score;
    let closePopup = document.querySelector("#close")
    closePopup.addEventListener('click', (event) => {
    popup.style.display = 'none';
  })

let user_value = [
  document.getElementById("name_of_user").value = localStorage.getItem("username"),
  document.getElementById("mail_of_user").value = localStorage.getItem("usermail"),
  document.getElementById("time_of_user").value = localStorage.getItem("minutes")+':'+localStorage.getItem("seconds"),
  document.getElementById("name_user").value = localStorage.getItem("username"),
  document.getElementById("mail_user").value = localStorage.getItem("usermail"),
  document.getElementById("score_of_user").value = score
];


const myvar = Array.from(user_value);

  let whatsapp = document.getElementById('url_whatsapp');
  whatsapp.addEventListener('click',function(event){
  let wts_shareUrl = "whatsapp://send?text=" + myvar ;
  window.open(wts_shareUrl);
  event.preventDefault(whatsapp);
});


let email = document.getElementById('url_mail');
  email.addEventListener('click', function(event){
  let email_url = "mailto:?body=" + myvar;
  window.open(email_url);
  event.preventDefault(email);
    });
  };
}

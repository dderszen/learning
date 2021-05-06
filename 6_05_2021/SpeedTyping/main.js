window.addEventListener('load', init);

//Lvl
const levels = {
    easy: 5,
    medium:3,
    hard:2
}

//change lvl
const currentLevel = levels.easy;

//Global vars
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM vars
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Words array
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  //Init Game
  function init(){
    seconds.innerHTML = currentLevel;
    //Load word from array
      showWord(words);

      wordInput.addEventListener('input', startMatch);

      setInterval(countdown, 1000);

      setInterval(checkStatus, 50);
  }

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

function matchWords(){
    if(wordInput.vaule === currentWord.innerHTML){
        message.innerHTML = "Correct!";
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}
  function showWord(words){  
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
  }

  //Countdown timer
  function countdown(){
      if(time>0){
          time--;
      }
      else if(time === 0){
          isPlaying = false;
      }
      
      timeDisplay.innerHTML = time;
  }

  function checkStatus(){
      if(!isPlaying && time === 0){
          message.innerHTML = 'Hold your horses, The Game is OVER!'
          score = -1;
      }
  }
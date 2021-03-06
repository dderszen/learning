//Init SpeechSyth API
const synth = window.speechSynthesis;

//DOM
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

//Browser identifier
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

//Init voices array
let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
    console.log(voices);
    //Loop through voices and put 'em into select as option
    voices.forEach(voice => {
        //Create option element
        const option = document.createElement('option');
        //Fill option with voice and Lang
        option.textContent = voice.name + '(' +voice.lang+ ')';
        //Set needed option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
        console.log(option);
        console.log(voice);
    });
};
    getVoices();
if (synth.onvoiceschanged !== undefined) {
     synth.onvoiceschanged = getVoices;
}

//Speak 
const speak = () => {
    //Check if speaking
    if(synth.speaking){
        console.error('Already speaking...');
        return;
    }
    if(textInput.value) {
        //Get speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        //Speak end
        speakText.onend = e => {
            console.log('Done speaking...');
        }

        //Speak error
        speakText.onerror = e => {
            console.error('Something went wrong');
        }

        //Selected voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        //Loop through voices from API
        voices.forEach(voice => {
            if(voice.name === selectedVoice){
                speakText.voice = voice;
            }
        });

        //Set pitch and rate
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;
        //Speak
        synth.speak(speakText);
    }
};


//EVENT LISTENERS
    //Text form submition
textForm.addEventListener('submit', e=> {
    e.preventDefault();
    speak();
    textInput.blur();
});

    //Rate value change
rate.addEventListener('change', e => rateValue.textContent = rate.value);
rate.addEventListener('change', e => pitchValue.textContent = pitch.value);

    //Voice select change
voiceSelect.addEventListener('change', e => speak());
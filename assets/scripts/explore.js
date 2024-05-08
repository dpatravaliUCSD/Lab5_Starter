// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const inputTxt = document.getElementById('text-to-speak');
  const talk = document.querySelector('button');

  const faceExpression = document.querySelector('#explore img'); 

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  voiceSelect.addEventListener('click', function(){
    populateVoiceList();
  });

  talk.addEventListener('click', function(){
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    
    var talkingFace = "assets/images/smiling-open.png";
    var silentFace = "assets/images/smiling.png";
    utterThis.onstart = function() {
      faceExpression.src = talkingFace;
    }
    utterThis.onend = function() {
      faceExpression.src = silentFace;
    }
  });
}

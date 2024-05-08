// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  const chooseHorn = document.getElementById('horn-select');
  const hornPic = document.querySelector('#expose img');
  const playSound = document.querySelector('#expose button');
  const audio = document.querySelector('#expose audio');
  const volumeInput = document.getElementById('volume');
  const volumeLogo = document.querySelector('#volume-controls img');

  //choose which horn
  chooseHorn.addEventListener('change', function() {
    if (this.value === 'air-horn') {
      hornPic.src = 'assets/images/air-horn.svg';
      hornPic.alt = 'Air Horn';
      audio.src = 'assets/audio/air-horn.mp3';
    } 
    else if (this.value === 'car-horn') {
      hornPic.src = 'assets/images/car-horn.svg';
      hornPic.alt = 'No image selected';
      audio.src = 'assets/audio/car-horn.mp3';
    } 
    else if (this.value === 'party-horn') {
      hornPic.src = 'assets/images/party-horn.svg';
      hornPic.alt = 'No image selected';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  //play horn sounds
  playSound.addEventListener('click', function() {
    if (chooseHorn.value === 'air-horn') {
      audio.play();
    }
    else if (chooseHorn.value === 'car-horn') {
      audio.play();
    }
    else if (chooseHorn.value === 'party-horn') {
      audio.play();
      jsConfetti.addConfetti();
    }
  });

  //change volume
  volumeInput.addEventListener('input', function() {
    let volumeValue = parseInt(this.value, 10);
    audio.volume = volumeValue / 100;

    if (volumeValue >= 1 && volumeValue < 33) {
      volumeLogo.src = 'assets/icons/volume-level-1.svg';
      volumeLogo.alt = 'Volume level: 1';
    } 
    else if (volumeValue >= 33 && volumeValue < 67) {
      volumeLogo.src = 'assets/icons/volume-level-2.svg';
      volumeLogo.alt = 'Volume level: 2';
    } 
    else if (volumeValue >= 67) {
      volumeLogo.src = 'assets/icons/volume-level-3.svg';
      volumeLogo.alt = 'Volume level: 3';
    } 
    else { //volume 0
      volumeLogo.src = 'assets/icons/volume-level-0.svg';
      volumeLogo.alt = 'Volume level: 0';
    }
});

}

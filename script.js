let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    let buttonInnerHtml = this.innerHTML;

    playSound(buttonInnerHtml);
    

    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  
  playSound(event.key);

  
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w": 
      let tom1 = new Audio("sound/tom-1.mp3");
      tom1.play();
      break;
    case "a": 
      let tom2 = new Audio("./sound/tom-2.mp3");
      tom2.play();
      break;
    case "s": 
      let tom3 = new Audio("sound/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sound/tom-4.mp3");
      tom4.play();
      break;
    case "j": 
      let snare = new Audio("sound/snare.mp3");
      snare.play();
      break;
    case "k": 
      let crash = new Audio("sound/crash.mp3");
      crash.play();
      break;
    case "l": 
      let kick = new Audio("sound/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makesound(this.innerHTML);
    makeanimation(this.innerHTML);
  });
  document.addEventListener("keypress", function (event) {
    makesound(event.key);
    makeanimation(event.key);
  });
}

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./assets/sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./assets/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./assets/sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./assets/sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./assets/sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./assets/sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./assets/sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function makeanimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}

const date = new Date();
const year = date.getFullYear();
document.querySelector("footer").innerHTML = `© ${year} Manisha Bose`;

var numbOfButtons=document.querySelectorAll(".button").length;

for(var i=0;i<numbOfButtons;i++)
{
    document.querySelectorAll(".button")[i]
    .addEventListener("click",function(){

        var buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
  });

  function sound(key) {
    switch (key) {
      case "du":
        var sound1 = new Audio("music/du.mp3");
        sound1.play();
        break;
    
      case "ta":
        var sound2 = new Audio("music/ta.mp3");
        sound2.play();
        break;
    
      case "tu":
        var sound3 = new Audio('music/tu.mp3');
        sound3.play();
        break;
    
      case "da":
        var sound4 = new Audio('music/da.mp3');
        sound4.play();
        break;
    
      case "su":
        var sound5 = new Audio('music/su.mp3');
        sound5.play();
        break;
    
      case "din":
        var sound6 = new Audio('music/din.mp3');
        sound6.play();
        break;
    
      case "tin":
        var sound7 = new Audio('music/tin.mp3');
        sound7.play();
        break;

      case "dum":
        var sound7 = new Audio('music/du.mp3');
        sound7.play();
        break;
    
      default: console.log(key);
    }
  }

  function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }
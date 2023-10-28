document.addEventListener("DOMContentLoaded", function () {
  const nameList = ["From : Sapna Gupta"];
  const floatingName = document.getElementById("successNote");

  // Fn to get a random name from the list
  function getRandomName() {
    const randomeIndex = Math.floor(Math.random() * nameList.length);
    return nameList[randomeIndex];
  }

  // fn to get a random colour
  function getRandomColour() {
    const letters = "0123456789ABCDEF";
    let colour = "#";
    for (let index = 0; index < 6; index++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }
  // fn to update the floating name position and style
  function updateFloatingName() {
    const name = getRandomName();
    const colour = getRandomColour();
    const x = Math.random() * (window.innerWidth - 500);
    const y = Math.random() * (window.innerHeight - 200);

    floatingName.textContent = name;
    floatingName.style.color = colour;
    floatingName.style.left = `${x}px`;
    floatingName.style.top = `${y}px`;
  }
  // update the floatName every 3 secondes adjusting the interval
  setInterval(updateFloatingName, 2000);

//   play songs
var mysong = document.getElementById("song");
var icon = document.getElementById("icon");
icon.onclick= function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "https://cdn-icons-png.flaticon.com/128/1057/1057237.png";
    }else{
        mysong.pause();
        icon.src ="https://cdn-icons-png.flaticon.com/128/2995/2995101.png"
    }
}
});

var tips = ["Read a book",
"Meditate",
"Ride a bike",
"Go jogging",
"Talk a walk around your neighborhood",
"Do crossword puzzles",
"Play online memory games",
"Delete social media apps",
"Start a planner",
"Drink a cup of tea",
"Take a few hours off of social media"
];

let contentGridElement = document.getElementById('menu');
let popupDistraction = document.getElementById('distraction');
console.log("loaded");

window.addEventListener('DOMContentLoaded', function(){
  distractionButton = document.getElementById("distraction-button");
  tipButton = document.getElementById("tip-button");
  tipOutput = document.getElementById("tip-output");

  tipButton.addEventListener("click", giveTip)
  distractionButton.addEventListener("click", popup);
});

let jsonDatabase = [
  {
    "label" : "ABOUT",
    "color" : "#41EAD4",
    "link" : "#about"
  },
  {
    "label" : "WELLNESS",
    "color" : "#FBFF12",
    "link" : "#wellness"
  },
  {
    "label" : "RESOURCES",
    "color" : "#FF206E",
    "link" : "#resources"
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createMenu(jsonDatabase[i]);
}

function createMenu(incomingJSON){
  let newMenuElement = document.createElement("a");
  newMenuElement.style.backgroundColor = incomingJSON['color'];
  newMenuElement.classList.add('menuContentItem');
  newMenuElement.innerText = incomingJSON['label'];
  newMenuElement.style.textDecoration = ['none'];
  newMenuElement.style.color = ['black'];
  newMenuElement.style.paddingTop = ['5%'];
  newMenuElement.style.paddingBottom = ['5%'];
  newMenuElement.style.width = ['75%'];
  newMenuElement.style.margin = ['-3% 0 6% 0'];
  newMenuElement.href = incomingJSON['link'];


  contentGridElement.appendChild(newMenuElement);
}

function giveTip(){
  var ranTip = tips[Math.floor(Math.random() * tips.length)];
  tipOutput.innerHTML = ranTip;
}

function popup(){
  //instagram, twitter, tiktok
  var num = Math.floor(Math.random()*6);
  var x = Math.floor((Math.random()* window.innerWidth)-(0.10*window.innerWidth));
  var y = Math.floor((Math.random()* window.innerHeight)-(0.07*window.innerHeight));
  // console.log(x);
  // console.log(y);
  console.log(num);
  let imageType = "";
  console.log(imageType);

  if(num == 0){
    imageType = "twitter.jpg";
  }
  else if(num == 1){
    imageType = "insta.png";
  }
  else if(num == 2){
    imageType = "sc.jpg";
  }
  else if(num == 3){
    imageType = "yt.jpg";
  }
  else if(num == 4){
    imageType = "reddit.jpg";
  }
  else if(num == 5){
    imageType = "tiktok.jpg";
  }

  let newPopup = document.createElement("div");
  newPopup.classList.add('distractionPopup');
  newPopup.style.left = x+'px';
  newPopup.style.top = y+'px';
  newPopup.style.zIndex = ['-30'];
  let topBorder = document.createElement("p");
  topBorder.classList.add('textDistraction');
  topBorder.innerText = ['• ——'];
  newPopup.appendChild(topBorder);

  let popupImg = document.createElement("img");
  popupImg.classList.add("popupImg");
  popupImg.src = imageType;
  newPopup.appendChild(popupImg);

  let botBorder = document.createElement("p");
  botBorder.classList.add('textDistraction');
  botBorder.innerText = ['O'];
  newPopup.appendChild(botBorder);

  popupDistraction.appendChild(newPopup);
}

const rader = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
const fontSize = ["1rem", "2rem", "3rem", "4rem", "5rem"];
const marginStyle = ['1px', '2px', '2.5px', '3px', '3.5px'];

for (let i = 0; i < 5; i++) {
  const pEl = document.createElement("p");
  document.body.appendChild(pEl);
  pEl.innerText = rader[i];
  pEl.style.textAlign = "center";
  pEl.style.fontSize = fontSize[i];
  pEl.style.marginTop = '5px';
  pEl.style.marginBottom = marginStyle;
  pEl.style.color = "#6e6ef7";
  const hue = 480 + i * 20;
  pEl.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;
}

const ytterDiv = document.createElement("div");
document.body.appendChild(ytterDiv);
ytterDiv.style.border = "2px solid black";
ytterDiv.style.display = "flex";
ytterDiv.style.justifyContent = "space-evenly";

const nummer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const nummer2 = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const nummer3 = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (let i = 0; i < nummer.length; i++) {
  console.log(nummer[i]);
}

for (let i = 0; i < 3; i++) {
  const inneDiv = document.createElement("div");
  ytterDiv.appendChild(inneDiv);
  inneDiv.style.border = "10px solid hsl(260 70% 80%)";
  inneDiv.style.backgroundColor = "hsl(260 70% 80%";
  inneDiv.style.textAlign = "center";
  inneDiv.style.width = "2.5rem";
  inneDiv.style.margin = "1rem";

}

//Inner div 1
const allDivs = document.querySelectorAll('div div')
console.log(allDivs[0]);

//spallt 1
for (let i = 0; i < nummer.length; i++) {
  const myP = document.createElement("p");
  allDivs[0].appendChild(myP);
  myP.innerText = nummer[i];
  myP.style.textAlign = 'left'
  myP.style.margin = '0px';
  myP.style.color = "white";

  if (i == 0 || i == 2 || i == 6 || i == 8) {
    myP.style.backgroundColor = "black";
  } else if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9) {
    myP.style.backgroundColor = "white";
    myP.style.color = "black";
  } else {
    myP.style.backgroundColor = "hsl(260 70% 80%)";
    myP.style.color = 'black';
  }
}

//spallt 2
for (let i = 0; i < nummer2.length; i++) {
  const myP2 = document.createElement("p");
  allDivs[1].appendChild(myP2);
  myP2.innerText = nummer2[i];
  myP2.style.margin ='0px';

  if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8) {
    myP2.style.backgroundColor = "white";
    myP2.style.color = "black";
  } else if (i == 3 || i == 5 || i == 7 || i == 9) {
    myP2.style.backgroundColor = "black";
    myP2.style.color = "white";
  } else {
    myP2.style.backgroundColor = "hsl(260 70% 80%)";
  }
}
//spallt 3
for (let i = 0; i < nummer3.length; i++) {
  const myP3 = document.createElement("p");
  allDivs[2].appendChild(myP3);
  myP3.innerText = nummer3[i];
  myP3.style.textAlign = 'right'
  myP3.style.backgroundColor = "hsl(260 70% 80%)"
  myP3.style.color = 
  myP3.style.margin = '0px';

  if (i % 2 == 0) {
    myP3.style.backgroundColor = "black";
    myP3.style.color = "white";
}
else if([i] <5 || [i] >5){
    myP3.style.backgroundColor = 'white'
}
}
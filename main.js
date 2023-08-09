const gridContainer = document.querySelector('#gridContainer');
let scaleValue = document.getElementById('scaleValue');
let scale = document.getElementById('scale');
const classic = document.querySelector("#classic");
const shade = document.querySelector("#shade");
const colour = document.querySelector("#colour");
const clear = document.querySelector("#clear");
let number = scale.value;
let fill = "black";


//Create etch-a-sketch grid
function createGrid () {
  for (let i=0; i<number*number;i++){
      const heightWidth = 32 / number + "rem";
      const gridItem = document.createElement('div');
      gridItem.classList.add('gridItem');
      gridItem.addEventListener("mouseover", gridStyle);
      gridItem.style.height = heightWidth; 
      gridItem.style.width = heightWidth;
      gridContainer.append(gridItem);
}}

createGrid(number);


//Draw on grid when mouse is over AND down
let isMouseDown;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);


//Enable pen sytle to be changed
function gridStyle(e) {
  if (!isMouseDown) return;
  if (fill === "colour") {
    e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
  }
  if (fill==="grey"){
    grey = Number(e.target.style.opacity);
    e.target.style.opacity = grey >= 1 ? "1" : grey + 0.4 + "";
  }
  this.style.backgroundColor = fill
}


//Choose pen style using buttons
classic.addEventListener("click", (e) =>{
  fill = "black"
});

shade.addEventListener("click", (e) =>{
  fill = "grey"
});

colour.addEventListener("click", (e) =>{
  fill = "colour"
});


//Use button to clear grid
clear.addEventListener("click", (e) =>{
  gridContainer.innerHTML="";
  number=scale.value;
  createGrid();
})

function newGrid() {
  gridContainer.innerHTML="";
  number = this.value;
  createGrid(); 
}


//Resize grid with slider
scale.addEventListener("input", newGrid)

//Show sliding scale value
scaleValue.innerHTML = scale.value + " x " + scale.value;

// Update the sliding scale value when slider handle is dragged
scale.oninput = function() {
  scaleValue.innerHTML = this.value + " x " + this.value;
}

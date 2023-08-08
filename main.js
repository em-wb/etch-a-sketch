

//Create resizeable grid

const gridContainer = document.querySelector('#gridContainer');
let scaleValue = document.getElementById('scaleValue');
let scale = document.getElementById('scale');
let number = scale.value


function createGrid (number){
  const heightWidth = 32 / number + "rem";
  console.log(heightWidth);
  for (let i=0; i<number*number;i++){
      const gridItem = document.createElement('div');
      gridItem.classList.add('gridItem');
      gridItem.style.height = heightWidth; 
      gridItem.style.width = heightWidth;
      gridContainer.append(gridItem);
  }
}
createGrid(number)

//Show sliding scale value

scaleValue.innerHTML = scale.value + " x " + scale.value;

// Update the sliding scale value when slider handle is dragged
scale.oninput = function() {
  scaleValue.innerHTML = this.value + " x " + this.value;
}

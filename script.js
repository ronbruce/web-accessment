
// widthInput.addEventListener('input', update);

const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const colorInput = document.getElementById('color-input');
const widthDisplay = document.getElementById('width-display');
const heightDisplay = document.getElementById('height-display');
const colorDisplay = document.getElementById('color-display');
const coloredBox = document.getElementById('colored-box');


widthInput.addEventListener('input', () => {
 
  const widthValue = widthInput.value + 'px';
  console.log("Width value with 'px'", widthValue)
  widthDisplay.textContent = 'Width: ' + widthValue;
  coloredBox.style.width = widthValue;
});


heightInput.addEventListener('input', () => {
  const heightValue = heightInput.value + 'px';
  heightDisplay.textContent = 'Height: ' + heightValue;
  coloredBox.style.height = heightValue;
});

colorInput.addEventListener('input', () => {
  const colorValue = colorInput.value;
  colorDisplay.textContent = 'Color: ' + colorValue;
  coloredBox.style.backgroundColor = colorValue;
});
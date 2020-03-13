const spacingInputElement = document.getElementById('spacing');
const blurInputElement = document.getElementById('blur');
const baseColorInputElement = document.getElementById('base-color');
const outputElement = document.querySelector('.output');
const coloredText = document.querySelectorAll('.colored-text');

// set defaults
let textShadowSpacing = 0; // px
const textShadowBlur = 3; // px
let blur = 0; // px
let baseColor = '#000000';
spacingInputElement.value = textShadowSpacing;
blurInputElement.value = blur;
baseColorInputElement.value = baseColor;
coloredText.forEach(text => text.style.color = baseColor);

function updateTextShadowSpacing(e) {
  const { value } = e.target;
  if(value > 5) {
    textShadowSpacing = 5;
  } else if (value < -5) {
    textShadowSpacing = -5
  } else if (!value) {
    textShadowSpacing = 0;
  } else {
    textShadowSpacing = value;
  }
  outputElement.style.textShadow = 
    `${textShadowSpacing}px ${textShadowSpacing}px ${textShadowBlur}px ${baseColor}`;
};

function updateBlur(e) {
  const { value } = e.target;
  if(value > 5) {
    blur = 5;
  } else if (value < 0 || !value) {
    blur = 0;
  } else {
    blur = value;
  }
  outputElement.style.filter = `blur(${blur}px)`;
};

function updateBaseColor(e) {
  const { value } = e.target;
  baseColor = value;
  outputElement.style.textShadow = 
    `${textShadowSpacing}px ${textShadowSpacing}px ${textShadowBlur}px ${baseColor}`;
  coloredText.forEach(text => text.style.color = baseColor);
}

spacingInputElement.addEventListener('input', updateTextShadowSpacing);
blurInputElement.addEventListener('input', updateBlur);
baseColorInputElement.addEventListener('input', updateBaseColor);
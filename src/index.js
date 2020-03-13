
const rootElement = document.documentElement;
const inputElements = document.querySelectorAll('.control-wrapper input');

const defaultValues = {
  'base-color': '#000',
  spacing: '0px',
  blur: '0px'
}

function setDefaults() {
  Object.entries(defaultValues).forEach(([key, value]) => 
  rootElement.style.setProperty(`--${key}`, value));
}

function updateCSSVariable(e) {
  const { dataset: { suffix }, name, value } = e.target;
  rootElement.style.setProperty(`--${name}`, `${value}${suffix || ''}`);
}

inputElements.forEach(inputElement => inputElement.addEventListener('input', updateCSSVariable));

setDefaults();
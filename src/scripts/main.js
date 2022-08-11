const hex = [
  1, 2, 3, 4, 5, 6, 7, 8,
  9, 'a', 'b', 'c', 'd' , 'e', 'f'
]

const background = document.body
// let logoHover = document.querySelector('.header__logo')
const generateGradientBtn = document.querySelector('.panel__button_generate')

const firstPanelHex = document.querySelector('.panel__color_first .panel__hex')
const secondPanelHex =   document.querySelector('.panel__color_second' +
  ' .panel__hex')
const firstPanelPreview = document.querySelector('.panel__color_first' +
  ' .panel__preview')
const secondPanelPreview = document.querySelector('.panel__color_second' +
  ' .panel__preview')

const copyBtn = document.querySelector('.panel__button_copy')

function generateGradient() {
  const generatedColor1 = '#' + generateHex()
  const generatedColor2 = '#' + generateHex()
  
  background.style.background = `linear-gradient(90deg,  ${generatedColor1}, ${generatedColor2})`
  firstPanelHex.innerHTML = generatedColor1.toUpperCase()
  secondPanelHex.innerHTML = generatedColor2.toUpperCase()
  firstPanelPreview.style.background = generatedColor1
  secondPanelPreview.style.background = generatedColor2
}

function generateHex() {
  let result = '', randomValue = ''
  for (let i = 0; i < 6; i++) {
    randomValue = Math.floor(Math.random() * hex.length)
    result += hex[randomValue]
  }
  return result
}

function copyCSS() {
  
}

generateGradientBtn.addEventListener('click', generateGradient)
generateGradientBtn.addEventListener('click', copyCSS)

generateGradient()
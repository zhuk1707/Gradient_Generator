let background = document.body

const hex = [
  1, 2, 3, 4, 5, 6, 7, 8,
  9, 'a', 'b', 'c', 'd' , 'e', 'f'
]

function generateGradient() {
  let generatedColor1 = '#' + generateHex()
  let generatedColor2 = '#' + generateHex()
  background.style.background = `linear-gradient(90deg,  ${generatedColor1}, ${generatedColor2})`
}

function generateHex() {
  let result = '', randomValue = ''
  for (let i = 0; i < 6; i++) {
    randomValue = Math.floor(Math.random() * hex.length)
    result += hex[randomValue]
  }
  return result
}
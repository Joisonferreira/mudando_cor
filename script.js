//A idéia principal desse programa é criar vários circulos com tamanhos diversos e com as cores alterando individualmente.
//Posicionar os círculos dentro de um conteiner retangular flex.
//Aplicando o conceito de responsividade tanto no tamanho do conteiner quanto nos círculos no interior dele.
//Ainda em desenvolvimento.
//Atualização 26/04/2024.

//Função que chama o elemento Element para o ambiente Javascript.
function changeBackgroundColor() {
  const body = document.getElementById('Element')
  const randomColor = getRandomColor()
  body.style.backgroundColor = randomColor
}
//Função que altera o valor do background do elemento Element.
function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 8)]
  }
  return color
}

//Função que chama o tributo top do conteiner Element para o ambiente Javascript.
function changeTopPosition() {
  const body = document.getElementById('Element')
  const randomPosition = getRandomPosition()
  body.style.top = randomPosition
}
//Função que altera o valor do top do elemento Element.
function getRandomPosition() {
  const percent = '10' //Preciso que os valores atualizados apareçam a cada atualização no looping
  let top = '%'
  for (let i = 0; i < 6; i++) {
    top = percent * 2 + top
  }
  return top
}
setInterval(changeBackgroundColor, 5000)
setInterval(changeTopPosition, 5000)

//Get elements
const container = document.querySelector('#container')
const btnClean =  document.querySelector('#clean')
const btnResize =  document.querySelector('#resize')
const btnRandom = document.querySelector('#random')
const colorInput = document.querySelector('#color-input')

//Events

colorInput.onchange = colorFixed

//Functions
function colorFixed(){
  const blocks=document.querySelectorAll('.block')
  blocks.forEach(block => block.onmouseenter = () => block.style.background = colorInput.value)
}

const addBlock = (amount, element) => {
  const block=document.createElement('div')
  block.classList.add('block')
  if(amount===0) return 
  block.addEventListener("mouseenter", colorFixed);
  element.appendChild(block)
  addBlock(amount-1,element)
}

const createGrid = (size=16) =>{
  const grid = document.createElement('div')
  grid.setAttribute('id','sketch')
  container.appendChild(grid)
  addBlock(size**2,grid)
}

//Call
createGrid()
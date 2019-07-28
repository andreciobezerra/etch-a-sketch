//Get elements
const container = document.querySelector('#container')
const btnClean =  document.querySelector('#clean')
const btnResize =  document.querySelector('#resize')
const btnRandom = document.querySelector('#random')
const colorInput = document.querySelector('#color-input')

//Events

btnClean.onclick = clear
btnResize.onclick = resize
btnRandom.onclick = colorRandom
colorInput.onchange = colorFixed

//Functions
function clear(){
  let blocks = document.querySelectorAll('.block')
  blocks.forEach(block => block.style.background = '#d0d0d0')  
}

const catchSize = () => Number(prompt('Enter the new amount of blocks per side(above>0):'))

function resize(){
  newSize = catchSize()
  if(newSize<1) resize()
  const currentGrid = document.querySelector('#sketch')
  currentGrid.parentNode.removeChild(currentGrid)
  createGrid(newSize)
}

function colorRandom(){
  const blocks = document.querySelectorAll('.block')
  blocks.forEach(block=>{
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    console.log(`rgb(${r},${g},${b})`);
    
    block.removeEventListener('mouseenter',colorFixed)
    block.onmouseenter = () => block.style.background = `rgb(${r},${g},${b})`
  }) 
}

function colorFixed(){
  const blocks=document.querySelectorAll('.block')
  blocks.forEach(block => {
    block.removeEventListener('mouseenter',colorRandom)
    block.onmouseenter = () => block.style.background = colorInput.value})
}

function addBlock(amount, element){
  const block=document.createElement('div')
  block.classList.add('block')
  if(amount===0) return 
  block.addEventListener("mouseenter", colorFixed);
  element.appendChild(block)
  addBlock(amount-1,element)
}

function createGrid(size=16){
  const grid = document.createElement('div')
  grid.setAttribute('id','sketch')
  container.appendChild(grid)
  grid.style.setProperty('--setGrid',size)
  addBlock(size*size,grid)
}

//Call
createGrid()
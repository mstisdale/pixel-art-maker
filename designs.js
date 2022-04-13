// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(size) {

// Not finished :/
function make(size) {
  container.style.setProperty('--size', size)
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div')
    div.classList.add('cell')

    div.addEventListener('mouseover', function(){
        if(!draw) return
        div.style.backgroundColor = color.value
    })
    div.addEventListener('mousdown', function(){
        div.style.backgroundColor = color.value
    })

    container.appendChild(div)
  }
}
}

makeGrid(32);

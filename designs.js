// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(size) {

// Your code goes here!
function make(size) {
  container.style.setProperty('--size', size)
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')

    div.addEventListener('mouseover', function(){
        if(!draw) return
        div.style.backgroundColor = color.value
    })
    div.addEventListener('mousdown', function(){
        // We don't need to check if draw is true here
        // because if we click on a pixel that means we want to draw that pixel
        div.style.backgroundColor = color.value
    })

    container.appendChild(div)
  }
}
}

makeGrid(32);

var cells = document.querySelectorAll("td")

function changeMarker(){
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = ''
  }
}
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', changeMarker)
}

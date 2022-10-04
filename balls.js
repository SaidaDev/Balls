var allDiv = document.querySelectorAll('.figure')

for (var i = 0; i < allDiv.length; i++) {
  var div = allDiv[i]

  div.style.left = i * 150 + 50 + 'px'

  div.onclick = function () {
    this.classList.toggle('up')
  }
}

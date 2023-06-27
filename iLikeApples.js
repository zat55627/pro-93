function addBingo() {
    bingo = document.getElementById('bingo').value
    localStorage.setItem('bingo', bingo)
    window.location = 'muffin.html'
}

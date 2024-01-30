var elInp = document.querySelector('.inp')
var elJavob = document.querySelector('.javob')
var elJavob2 = document.querySelector('.javob2')
var elJavob3 = document.querySelector('.javob3')
var elJavob4 = document.querySelector('.javob4')

function fn() {
    var h1 = elJavob
    var h2 = elJavob2
    var h3 = elJavob3
    var h4 = elJavob4

    var masofa = elInp.value
    var vaqt = 4
    var vaqt2 = 20
    var vaqt3 = 100
    var vaqt4 = 800
    
    var result = masofa / vaqt
    h1.textContent = result + ' soat'

    var result = masofa / vaqt2
    h2.textContent = result + ' soat'

    var result = masofa / vaqt3
    h3.textContent = result + ' soat'

    var result = masofa / vaqt4
    h4.textContent = result + ' soat'
}
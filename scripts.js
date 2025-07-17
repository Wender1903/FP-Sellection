let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1


function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotOld = indicator.querySelector('ul li.active')
    dotOld.classList.remove('active')
    dots[active].classList.add('active')
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)


}

prevBtn.onclick = () => {
    active -= 1
    if (active < firstPosition) {
        active = lastPosition
    }
    setSlider()
    items[active].classList.add('active')


}

nextBtn.onclick = () => {
    active += 1
    if (active > lastPosition) {
        active = 0
    }
    setSlider()
    items[active].classList.add('active')
}
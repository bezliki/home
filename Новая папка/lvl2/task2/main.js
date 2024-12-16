
let clickCount = 0;
const handleClick = () => {
    clickCount++;
    document.getElementById('counter').textContent = `Количество кликов: ${clickCount}`
}


const button = document.getElementById('clickButton')
button.addEventListener('click', handleClick)


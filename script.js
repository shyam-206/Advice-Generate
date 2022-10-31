
const generateText = document.getElementById('generateText')
const adviceButton = document.getElementById('adviceButton')

const getNewAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(json => {
            generateText.innerText = `${json.slip['advice']}`
        })
}

adviceButton.onclick = function() {
    getNewAdvice()
} 
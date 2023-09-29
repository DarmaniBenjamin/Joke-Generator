const jokeEl = document.querySelector('.joke')
const button = document.querySelector('.btn')
const jokeURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

function joke(){
    jokeEl.classList.remove('fade')
    fetch(jokeURL)
    .then(data => data.json())
    .then(item => {
        jokeEl.innerHTML = `${item.joke}`
        jokeEl.classList.add('fade')
    })
}
button.addEventListener('click', joke)
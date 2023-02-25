'use strict';
const $ = document;
const bodyElem = $.querySelector('body')
const messageElem = $.querySelector('.message')
const scoreElem = $.querySelector('.score')
const inputElem = $.querySelector('.guess')
const highscoreElem = $.querySelector('.highscore')
const qnumberElem = $.querySelector('.number')
const giphy = $.querySelector('.giphy')
let numberQuery = Math.floor((Math.random() * 20) + 1)
qnumberElem.textContent = '?'
function lost () {
    messageElem.textContent = '😢game over'
    scoreElem.textContent = 0
    bodyElem.style.background = 'red'
    giphy.setAttribute('src', 'loser.gif')
    qnumberElem.textContent = numberQuery
    inputElem.disabled = true
}
function win () {
    messageElem.textContent = '🤩You Win'
    bodyElem.style.background = 'green'
    giphy.setAttribute('src', 'win.gif')
    qnumberElem.textContent = numberQuery
    inputElem.disabled = true
    if (Number(highscoreElem.textContent) >= Number(scoreElem.textContent) ) {
        highscoreElem.textContent = highscoreElem.textContent
    } else {
        highscoreElem.textContent = scoreElem.textContent
    }
}
$.querySelector('.check').addEventListener('click', function () {
    const guess = Number(inputElem.value)
    scoreElem.textContent  = Number(scoreElem.textContent) - 1
    if (!guess || guess < 0 || guess > 20) {
        messageElem.textContent =
        'please insert number between 1 and 20'
        if (scoreElem.textContent <= 0) {
            lost()
        }
    } else if (Number(scoreElem.textContent) <= 0) {
        lost()
    } else if (guess === numberQuery) {
        win()
    } else {
        if (guess > numberQuery) {
            messageElem.textContent ='⬆️too high'
        } else if (guess < numberQuery) {
            messageElem.textContent ='⬇️too low'
        }
    }
})
$.querySelector('.again').addEventListener('click', function () {
    messageElem.textContent = 'Start guessing...'
    inputElem.disabled = false
    scoreElem.textContent = '20'
    inputElem.value = null
    bodyElem.style.background = "linear-gradient(90deg, rgba(59,202,210,1) 0%, rgba(241,166,232,1) 100%)"
    numberQuery = Math.floor((Math.random() * 20) + 1)
    qnumberElem.textContent = '?'
    giphy.setAttribute('src', 'playing.gif')
})
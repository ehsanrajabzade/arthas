'use strict';
const $ = document;
const bodyElem = $.querySelector('body')
const messageElem = $.querySelector('.message')
const scoreElem = $.querySelector('.score')
const inputElem = $.querySelector('.guess')
const highscoreElem = $.querySelector('.highscore')
const qnumberElem = $.querySelector('.number')
let numberQuery = Math.floor((Math.random() * 20) + 1)
qnumberElem.textContent = numberQuery
function lost () {
    messageElem.textContent = '😢game over'
    scoreElem.textContent = 0
    bodyElem.style.backgroundColor = 'red'
    qnumberElem.textContent = numberQuery
    inputElem.disabled = true
}
function win () {
    messageElem.textContent = '🤩You Win'
    bodyElem.style.backgroundColor = 'green'
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
    bodyElem.style.backgroundColor = '#222'
    numberQuery = Math.floor((Math.random() * 20) + 1)
    qnumberElem.textContent = numberQuery
})
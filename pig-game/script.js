'use strict';
const $ = document
const playerOneName = $.querySelector('#name--0')
const scoreplayerOne = $.querySelector('#score--0')
let currentPlayerOne = $.querySelector('#current--0')
let numberCurrentPlayerOne = Number(currentPlayerOne.textContent)
const sectionPlayerOne = $.querySelector('.player--0')
const playerTwoName = $.querySelector('#name--1')
const scoreplayerTwo = $.querySelector('#score--1')
let currentPlayerTwo = $.querySelector('#current--1')
let numberCurrentPlayerTwo = Number(currentPlayerTwo.textContent)
const sectionPlayerTwo = $.querySelector('.player--1')
const imgDice = $.querySelector('.dice')
let sdsdd = true
$.querySelector('.btn--roll').addEventListener('click', function () {
    const randNum = Math.floor(Math.random()*6)+1
    // player one
    if (sdsdd) {
        if (randNum === 1) {
            imgDice.setAttribute('src', 'dice-1.png')
            currentPlayerOne.textContent = 0
            numberCurrentPlayerOne = 0
            sectionPlayerOne.classList.remove('player--active')
            sectionPlayerTwo.classList.add('player--active')
            sdsdd = false 
        } else {
            if (randNum === 2) {
                imgDice.setAttribute('src', 'dice-2.png')
                numberCurrentPlayerOne = numberCurrentPlayerOne + randNum
            } else if (randNum === 3) {
                imgDice.setAttribute('src', 'dice-3.png')
                numberCurrentPlayerOne = numberCurrentPlayerOne + randNum
            } else if (randNum === 4) {
                imgDice.setAttribute('src', 'dice-4.png')
                numberCurrentPlayerOne = numberCurrentPlayerOne + randNum
            } else if (randNum === 5) {
                imgDice.setAttribute('src', 'dice-5.png')
                numberCurrentPlayerOne = numberCurrentPlayerOne + randNum
            } else {
                imgDice.setAttribute('src', 'dice-6.png')
                numberCurrentPlayerOne = numberCurrentPlayerOne + randNum
            }
            currentPlayerOne.textContent = numberCurrentPlayerOne
        }
    }
    // player two
    else {
        if (randNum === 1) {
            imgDice.setAttribute('src', 'dice-1.png')
            currentPlayerTwo.textContent = 0
            numberCurrentPlayerTwo = 0
            sectionPlayerTwo.classList.remove('player--active')
            sectionPlayerOne.classList.add('player--active')
            sdsdd = true 
        } else {
            if (randNum === 2) {
                imgDice.setAttribute('src', 'dice-2.png')
                numberCurrentPlayerTwo = numberCurrentPlayerOne + randNum
            } else if (randNum === 3) {
                imgDice.setAttribute('src', 'dice-3.png')
                numberCurrentPlayerTwo = numberCurrentPlayerTwo + randNum
            } else if (randNum === 4) {
                imgDice.setAttribute('src', 'dice-4.png')
                numberCurrentPlayerTwo = numberCurrentPlayerTwo + randNum
            } else if (randNum === 5) {
                imgDice.setAttribute('src', 'dice-5.png')
                numberCurrentPlayerTwo = numberCurrentPlayerTwo + randNum
            } else {
                imgDice.setAttribute('src', 'dice-6.png')
                numberCurrentPlayerTwo = numberCurrentPlayerTwo + randNum
            }
            currentPlayerTwo.textContent = numberCurrentPlayerTwo
        }
    }
})
$.querySelector('.btn--hold').addEventListener('click', function () {
    if (sdsdd) {
        scoreplayerOne.textContent = Number(scoreplayerOne.textContent) + numberCurrentPlayerOne
        currentPlayerOne.textContent = 0
        numberCurrentPlayerOne = 0
        sectionPlayerTwo.classList.add('player--active')
        sectionPlayerOne.classList.remove('player--active')
        sdsdd = false
        const asaas = Number(scoreplayerOne.textContent)
        if (asaas >= 100) {
            console.log('asdasd1');
            sectionPlayerOne.style.backgroundColor = '#79F28C'
        }
        console.log(scoreplayerOne.textContent);
    } else {
        scoreplayerTwo.textContent = Number(scoreplayerTwo.textContent) + numberCurrentPlayerTwo
        currentPlayerTwo.textContent = 0
        numberCurrentPlayerTwo = 0
        sectionPlayerOne.classList.add('player--active')
        sectionPlayerTwo.classList.remove('player--active')
        sdsdd = true
        const hghg  = Number(scoreplayerTwo.textContent)
        if (hghg >= 100) {
            console.log('asdasd2');
            sectionPlayerTwo.style.backgroundColor = '#79F28C'
        }
        console.log(scoreplayerTwo.textContent);
    }
})

$.querySelector('.btn--new').addEventListener('click', function () {
    scoreplayerOne.textContent = 0
    numberCurrentPlayerOne = 0
    currentPlayerOne.textContent = 0
    scoreplayerTwo.textContent = 0
    numberCurrentPlayerTwo = 0
    currentPlayerTwo.textContent = 0
    sectionPlayerOne.style.backgroundColor = ''
    sectionPlayerTwo.style.backgroundColor = ''
    sectionPlayerOne.classList.add('player--active')
    sectionPlayerTwo.classList.remove('player--active')
    sdsdd = true
})
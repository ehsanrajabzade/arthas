'use strict';
const $ = document;
const numberQuery = $.querySelector('.number').textContent = 10
$.querySelector('.check').addEventListener('click', function () {
    const guess = Number($.querySelector('.guess').value)
    if (!guess || guess < 0 || guess > 20) {
        $.querySelector('.message').textContent =
        'please insert number between 1 and 20'
        let ss = Number($.querySelector('.score').textContent) - 1
        $.querySelector('.score').textContent = ss
    } else if (Number($.querySelector('.score').textContent) <= 1) {
        $.querySelector('.message').textContent = '😢game over'
        $.querySelector('.score').textContent = 0
        $.querySelector('body').style.backgroundColor = 'red'
    } else if (guess === numberQuery) {
        $.querySelector('.message').textContent = '🤩You Win'
        $.querySelector('body').style.backgroundColor = 'green'
        if (Number($.querySelector('.highscore').textContent) >= Number($.querySelector('.score').textContent) ) {
            $.querySelector('.highscore').textContent = $.querySelector('.highscore').textContent
        } else {
            $.querySelector('.highscore').textContent = $.querySelector('.score').textContent
        }
    } else {
        if (guess > numberQuery) {
            $.querySelector('.message').textContent ='⬆️too high'
        } else if (guess < numberQuery) {
            $.querySelector('.message').textContent ='⬇️too low'
        }
        let ss = Number($.querySelector('.score').textContent) - 1
        $.querySelector('.score').textContent = ss
    }
})
$.querySelector('.again').addEventListener('click', function () {
    $.querySelector('.score').textContent = '20'
    $.querySelector('.guess').value = null
    $.querySelector('body').style.backgroundColor = '#222'

})
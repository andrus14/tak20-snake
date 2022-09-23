let snakeLocation = [[8, 5], [7, 5]];
let direction = 'up';
drawSnake();

const intervalId = setInterval(() => {
    if ( direction == 'up' && snakeLocation[0][0] != 0 ) {
        snakeLocation.unshift([snakeLocation[0][0] - 1, snakeLocation[0][1]]);
        snakeLocation.pop();
    }
    drawSnake();
}, 500);

function drawSnake () {
    Array.from(document.querySelectorAll('table td')).forEach(el => {
        el.classList.remove('snake');
    });
    snakeLocation.forEach( el => {
        const snakeCell = document.querySelector('td[data-x="' + el[0] + '"][data-y="' + el[1] + '"]');
        snakeCell.classList.add('snake');
    });
}
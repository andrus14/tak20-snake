let snakeLocation = [[5, 8], [5, 7]];
let direction = 'up';

document.addEventListener('keydown', (e) => {
    console.log(e.key);

    switch ( e.key.toLowerCase() ) {
        case 'arrowup':
        case 'w':
            direction = 'up';
            break;
        case 'arrowdown':
        case 's':
            direction = 'down';
            break;
        case 'arrowleft':
        case 'a':
            direction = 'left';
            break;
        case 'arrowright':
        case 'd':
            direction = 'right';
            break;
    }
});

drawSnake();
drawFood();

const intervalId = setInterval(() => {

    if ( direction == 'up' && snakeLocation[0][1] != 0 ) {
        snakeLocation.unshift([snakeLocation[0][0], snakeLocation[0][1] - 1]);
        snakeLocation.pop();
    } else if ( direction == 'down' && snakeLocation[0][1] != 9 ) {
        snakeLocation.unshift([snakeLocation[0][0], snakeLocation[0][1] + 1]);
        snakeLocation.pop();
    } else if ( direction == 'left' && snakeLocation[0][0] != 0 ) {
        snakeLocation.unshift([snakeLocation[0][0] - 1, snakeLocation[0][1]]);
        snakeLocation.pop();
    } else if ( direction == 'right' && snakeLocation[0][0] != 9 ) {
        snakeLocation.unshift([snakeLocation[0][0] + 1, snakeLocation[0][1]]);
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

function drawFood () {
    
    let x = snakeLocation[0][0];
    let y = snakeLocation[0][1];
    
    while ( isFoodInSnake(x, y) ) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
    }
    
    const foodCell = document.querySelector('td[data-x="' + x + '"][data-y="' + y + '"]');
    foodCell.classList.add('food');

}

function isFoodInSnake (x, y) {
    includes = false;
    snakeLocation.forEach( el => {
        if ( el[0] == x && el[1] == y ) {
            includes = true;
        }
    });

    return includes;
}
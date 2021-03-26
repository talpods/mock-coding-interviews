function findRobot(movements) {
    let x = 0;
    let y = 0;

    for(let index = 0; index  < movements.length; index++) {
        if(movements[index] == 'N') {
            y++;
        }else if(movements[index] == 'S') {
            y--;
        }else if(movements[index] == 'E') {
            x++;
        }else if(movements[index] == 'W') {
            x--;
        }
    }

    return [x, y];
}

console.log( findRobot("NE") ); // [ 1, 1 ]
console.log( findRobot("EEEWWW") ); // [ 0, 0 ]
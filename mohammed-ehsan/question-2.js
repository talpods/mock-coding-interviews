var stock = {
    'Paracetamol': 3,
    'Aspirin': 1,
}

function updateStock(action, item) {
    if(action == 'GET') {
        if(stock[item] > 0) {
            stock[item]--;
            return "OK";
        }else {
            return "OOS";
        }
    }else if (action == 'ADD') {
        stock[item]++;
    
        return "OK";
    }
}

console.log( updateStock('GET', 'Aspirin') ); // OK
console.log( updateStock('GET', 'Aspirin') ); // OOS
console.log( updateStock('ADD', 'Aspirin') ); // OK
console.log( updateStock('GET', 'Aspirin') ); // OK
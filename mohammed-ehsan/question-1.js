function findSumIfEqualTo(numbers, search) {
    for(var i = 0; i < numbers.length; i++) {
        for(var j = i+1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] == search) {
                return "YES";
            }
        }
    }

    return "NO";
}

console.log( findSumIfEqualTo([1, 2, 3, 4], 5) ); // YES
console.log( findSumIfEqualTo([1, 2, 3, 4], 6) ); // YES
console.log( findSumIfEqualTo([1, 2, 3, 4], 7) ); // YES
console.log( findSumIfEqualTo([1, 2, 3, 4], 8) ); // NO
function findSumOfNumbers(numbers){
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    return sum;
}

let result = findSumOfNumbers([2, 5, 1, 3]);
console.assert(result === 11, {
    test: "findSomeOfNumbers({2, 5, 1, 3]);",
    expected: 11,
    result: result

});

result = findSumOfNumbers([]);
console.assert(result === 0, {
    test: "findSumOfNumbers with an empty array",
    expected: 0,
    result: result
});

result = findSumOfNumbers(null);
console.assert(result === NaN, {
    test: "findSumOfNumbers with null",
    expected: NaN,
    result: result
});

result = findSumOfNumbers();
console.assert(result === NaN, {
    test: "findSumOfNumbers with no arguments",
    expected: NaN,
    result: result
});
const input = [3, 3, 1, 2, 4, 3, 0, 1, 1, 0, 2, 4, 2, 1];
const countArr = Array(Math.max(...input) + 1).fill(0);

console.log("Unsorted input: ", input);

input.forEach((value) => countArr[value]++);

input.length = 0;

countArr.forEach((count, value) => {
    while (count-- > 0) {
        input.push(value);
    }
});

console.log("Sorted input: ", input);

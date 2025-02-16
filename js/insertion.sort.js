const input = [3, 4, 1, 7, 33, 2, 22, 21, 66, 55];

console.log("Unsorted input: ", input);

for (let i = 1; i < input.length; i++) {
    let index = i;
    let value = input[i];

    for (let j = i - 1; j > -1; j--) {
        if (input[j] > value) {
            input[j + 1] = input[j];
            index = j;
        } else {
            break;
        }
    }

    input[index] = value;
}

console.log("Sorted input: ", input);

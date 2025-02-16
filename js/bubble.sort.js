const input = [3, 4, 1, 7, 33, 2, 22, 21, 66, 55];

console.log("Unsorted input: ", input);

for (let i = 0; i < input.length; i++) {
    let isThereAnySwap = false;

    for (let j = 0; j < input.length - i; j++) {
        if (input[j] > input[j + 1]) {
            isThereAnySwap = true;

            const temp = input[j];
            input[j] = input[j + 1];
            input[j + 1] = temp;
        }
    }
    if (!isThereAnySwap) break;
}

console.log("Sorted input: ", input);

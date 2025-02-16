const input = [3, 4, 1, 7, 33, 2, 22, 21, 66, 55];

console.log("Unsorted input: ", input);

for (let i = 0; i < input.length; i++) {
    let IndexOfMinValue = i;

    for (let j = i + 1; j < input.length; j++) {
        if (input[j] < input[IndexOfMinValue]) IndexOfMinValue = j;
    }

    const temp = input[i];
    input[i] = input[IndexOfMinValue];
    input[IndexOfMinValue] = temp;
}

console.log("Sorted input: ", input);

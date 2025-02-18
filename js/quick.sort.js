// ============================= readable and maintainable approach =========================================

const input = [3, 4, 1, 7, 33, 2, 22, 21, 66, 55];

console.log("Unsorted input: ", input);

function readableApproach(inputArr) {
    if (inputArr.length < 2) return inputArr;

    const pivot = inputArr.at(-1);
    let leftSide = [];
    let rightSide = [];

    for (let i = 0; i < inputArr.length - 1; i++) {
        if (inputArr[i] > pivot) rightSide.push(inputArr[i]);
        else leftSide.push(inputArr[i]);
    }

    leftSide = readableApproach(leftSide);
    rightSide = readableApproach(rightSide);

    return Array().concat(leftSide, [pivot], rightSide);
}

// console.log("Sorted input: ", readableApproach(input));

// ============================= performance approach =========================================

function performanceApproachHelper(inputArr, low, high) {
    const pivot = inputArr.at(high);

    let index = low - 1;

    for (let i = low; i < high; i++) {
        if (inputArr[i] <= pivot) {
            index += 1;
            [inputArr[i], inputArr[index]] = [inputArr[index], inputArr[i]];
        }
    }

    [inputArr[high], inputArr[index + 1]] = [
        inputArr[index + 1],
        inputArr[high],
    ];

    return index + 1;
}

function performanceApproach(inputArr, low = 0, high) {
    if (high === undefined) high = inputArr.length - 1;

    if (low < high) {
        const result = performanceApproachHelper(inputArr, low, high);

        performanceApproach(inputArr, low, result - 1);
        performanceApproach(inputArr, result + 1, high);
    }

    return inputArr;
}

console.log("Sorted input: ", performanceApproach(input));

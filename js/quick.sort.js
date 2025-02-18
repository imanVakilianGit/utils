// ============================= readable and maintainable approach =========================================

const input = [3, 4, 1, 7, 33, 2, 22, 21, 66, 55];

console.log("Unsorted input: ", input);

function recursiveFunc(inputArr) {
    if (inputArr.length < 2) return inputArr;

    const pivot = inputArr.at(-1);
    let leftSide = [];
    let rightSide = [];

    for (let i = 0; i < inputArr.length - 1; i++) {
        if (inputArr[i] > pivot) rightSide.push(inputArr[i]);
        else leftSide.push(inputArr[i]);
    }

    leftSide = recursiveFunc(leftSide);
    rightSide = recursiveFunc(rightSide);

    return Array().concat(leftSide, [pivot], rightSide);
}

console.log("Sorted input: ", recursiveFunc(input));

/**
 * O(n^2)
 */
function findSmallestNumber(array) {
  let smallest = array[0];
  let smallestIndex = 0;

  for(let i = 1; i < array.length; i++) {
    const number = array[i];

    if(number < smallest) {
      smallest = number;
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(array) {
  const copiedArray = [...array];
  const result = [];

  for(let i = 0; i < array.length; i++) {
    const smallestIndex = findSmallestNumber(copiedArray);
    result.push(copiedArray[smallestIndex]);
    copiedArray.splice(smallestIndex, 1);
  }

  return result;
}

const numberArray = [31,44,1,3,29,93,91,20,35,71,89,25,52,19,41,61,38,12,10,50,67,26,5,54,55,18,97,6,34,-1,0,88,2];

console.log(selectionSort(numberArray));

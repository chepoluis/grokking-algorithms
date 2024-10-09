function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = Math.ceil((low + high) / 2);
    const elementSelected = array[middle];
    console.log({elementSelected, middle});

    if (elementSelected === item) {
      return middle;
    } else if (elementSelected < item) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return null;
}

const array = [23, 30, 76, 93, 126, 143, 184, 199, 203, 215, 229, 315, 318, 320, 336, 376, 416, 429, 445, 447, 464, 466, 467, 475, 485, 499, 524, 530, 545, 548, 557, 579, 581, 594, 603, 649, 662, 670, 679, 685, 722, 735, 737, 766, 853, 855, 881, 942, 956, 988];
console.log(binarySearch(array, 315));

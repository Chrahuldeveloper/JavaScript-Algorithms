function bubbleSort(array) {
  const size = array.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function FindSecondLargest(array) {
  // lets sort the array using Bubble Sort and return the second largest element;
  const sortedArray = bubbleSort(array);
  const length = sortedArray.length;
  console.log(sortedArray);
  console.log(sortedArray[length - 2]);

}

FindSecondLargest([122, 35, 11, 10, 1,12, 325, 1, 120, 986, 100]);

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// We use Two for loops to loop over an array
// The inner for loop compares both number at the indexes starting form 0 and 1
// Then we swap the two numbers to sort the array

// Time Complexity
// O(n²) Worst case when every element of the input array is exactly opposite of the sorted order
// O(n) best case when the input array is already sorted

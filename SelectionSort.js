function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < array.length; i++) {
    let min = i;
    // Assume the first index element as min
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = array[min];
      array[min] = array[i];
      array[i] = temp;
    }
  }

  return array;
}
//  Time Complexity O(n2) Best case and Worst case
// we start by assuming that the first element is min and then compare it with rest of elements in array.Then we swap the elements;

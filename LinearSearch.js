function linearSearch(element, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

// We need to itrate over all the elements in the array starting from the index 0 and compare it with the element we need. if the its found then return the index or  -1
// Time complexity of Linear Search is O(n)

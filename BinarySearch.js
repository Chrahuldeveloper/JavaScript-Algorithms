function BinarySearch(element, sortedarray) {
  let start = 0;
  let end = sortedarray.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (element === sortedarray[mid]) {
      return true;
    } else if (sortedarray[mid] < element) {
      // continue searching on the right
      start = mid + 1;
    } else {
      // continue searching on the left
      end = mid - 1;
    }
  }
  return false;
}

// Time complexity of the Binary Search is O(log2n)

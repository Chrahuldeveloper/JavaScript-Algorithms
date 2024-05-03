function findSingleElement(array) {
  const size = array.length;

  for (let i = 0; i < size; i++) {
    let count = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }

    if (count == 1) {
      return array[i];
    }
  }

  return -1;
}

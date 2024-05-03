function leadersInArray(array) {
  const size = array.length;
  for (let i = 0; i < size; i++) {
    let j;
    for (j = i + 1; j < size; j++) {
      if (array[i] <= array[j]) {
        break;
      }
    }
    if (j == size) {
      console.log(array[i]);
    }
  }
}

leadersInArray([16, 17, 4, 3, 5, 2]);

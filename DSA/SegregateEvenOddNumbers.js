function segregate(array) {
  const size = array.length;

  let i = -1;
  let j = 0;

  while (j != size) {
    if (array[j] % 2 == 0) {
      i++;
      let t = array[i];
      array[i] = array[j];
      array[j] = t;
    }
    j++;
  }
  return array;
}

const seg = segregate([1, 3, 2, 4, 7, 6, 9, 10]);
console.log(seg);


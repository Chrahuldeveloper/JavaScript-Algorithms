const encode = (str) => {
  let encoderes = "";
  let firstChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === firstChar) {
      count++;
    } else {
      encoderes += firstChar + count;
      firstChar = str[i];
      count++;
    }
  }

  return (encoderes += firstChar + count);
};

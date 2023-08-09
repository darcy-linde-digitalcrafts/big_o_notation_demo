function sum_char_codes(str) {
  let sum = 0;
  for (let i = 0; i < str.length; ++i) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

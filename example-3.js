function sum_char_codes(str) {
  let sum = 0;
  for (let i = 0; i < str.length; ++i) {
    const charCode = str.charCodeAt(i);
    // Capital A
    if (charCode === 65) {
      return sum;
    }

    sum += charCode;
  }

  return sum;
}

function manyDigits(x) {
  let count = 0;
  while (x > 0) {
    x = Math.floor(x / 10);
    console.log("x", x);
    count++;
  }
  return count;
}

console.log(manyDigits(786));

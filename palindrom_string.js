var reverseString = function (s) {
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    if (s[low].toLowerCase() != s[high].toLowerCase()) {
      return false;
    }
    low++;
    high--;
  }

  return true;
};
let s = "sonu";
console.log(reverseString(s));

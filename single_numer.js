const single_number = (arr) => {
  let hash = {};
  let exact_number = -1;
  arr.forEach((element) => {
    hash[element] = ++hash[element] || 1;
    if (hash[element] == 1) {
      exact_number = element;
    }
  });
  for (var i in hash) {
    console.log(hash);
  }
};
console.log(single_number([4, 1, 2, 1, 2]));

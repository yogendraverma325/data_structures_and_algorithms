let input = [9, 1, 7, 3, 5, 10, 24];

function merge(leftAr, rightAr) {
  let result = [];
  let left_index = 0;
  let right_index = 0;
  while (left_index < leftAr.length && right_index < rightAr.length) {
    if (leftAr[left_index] < rightAr[right_index]) {
      result.push(leftAr[left_index]);
      left_index++;
    } else {
      result.push(rightAr[right_index]);
      right_index++;
    }
  }
  return result
    .concat(leftAr.slice(left_index))
    .concat(rightAr.slice(right_index));
}
function mergeSort(input) {
  if (input.length <= 1) {
    return input;
  }
  let mid = Math.floor(input.length / 2);
  let left_part = input.slice(0, mid);
  let right_part = input.slice(mid);

  let sorted_left = mergeSort(left_part);
  let sorted_right = mergeSort(right_part);
  return merge(sorted_left, sorted_right);
}
console.log("mergeSort", mergeSort(input));

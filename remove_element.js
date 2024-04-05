var removeElement = function (nums, val) {
let count = 0
let index = 0
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if(element === val){
        index = i
        i++
    }else {
        [nums[index], nums[i]] = [nums[i], nums[index]]
        count ++
    }
    console.log("INDEX", index, "I", i)
    console.log("COUNT", count)
}


    return nums.slice(0, count)

};

console.log(removeElement([3, 2, 2, 3], 3));
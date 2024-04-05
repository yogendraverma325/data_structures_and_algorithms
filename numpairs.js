var numIdenticalPairs = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        for (let j = i+1; j < nums.length; j++) {
         if(nums[i] === nums[j]) count++
            
        }
        
    }
    return count
};

var numIdenticalPairs2 = function(nums) {
    let count = 0
    let left = 0
    let right = 1
    while(left < nums.length){
        if(nums[left] === nums[right]){
            count++
        }
        right++
        if(right>nums.length){
            left++
            right=left+1;
        }
    }
    return count
};
console.log(numIdenticalPairs2([1,1,1,1]))
// console.log(numIdenticalPairs([1,1,1,1]))
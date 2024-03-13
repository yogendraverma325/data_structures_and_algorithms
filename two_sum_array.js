var twoSum = function(numbers, target) {
    let low=0;
    let high=low+1;
    while(low < high ){
        if(numbers[low]+numbers[high]==target){
            return [low+1,high+1]
            
        }
    low++;
    high++;
    }
};
let numbers=[1,2,3,4,4,9,56,90];
let target=8;
console.log(twoSum(numbers,target));
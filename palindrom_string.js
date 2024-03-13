var reverseString = function(s) {
    let low=0;
    let high=s.length-1;
    console.log("low ",low," high ",high)
    while(low < high){
        console.log("low ",low," high ",high)
        if(s[low].toLowerCase()!=s[high].toLowerCase()){
          return false
        }
      low ++;
      high--;
    }
    
    return true
};
let s='MGM';
console.log(reverseString(s));
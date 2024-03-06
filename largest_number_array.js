let arr=[3,1,2,4,5,6,7,6,9,7,8];
let large=arr[0];
let slarge=-1;
for(let i=1;i<arr.length;i++){
    if(arr[i]>large){
        slarge=large;
        large=arr[i];
    }else if(arr[i]<large && arr[i]>slarge){
       slarge=arr[i];
    }

}
console.log("large",large,", S_LARGE",slarge);

function customSortString(order,s) {
let result='';
for(let i=0 ;i<order.length;i++){
    let el=order[i];
    if(s.includes(el)){
        let count=s.split(el).length-1;
        while(count >0){
          result +=el;
          count --;
        }
        s=s.split(el).join("");
    }
    console.log("el",el);

}
result +=s;
return result;
}
let order='cba';
let s='abcd';
console.log("customSortString ",customSortString(order,s));
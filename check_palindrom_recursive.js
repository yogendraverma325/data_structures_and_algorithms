function checkPalindrom(x){
    let reverse=0;
    let temp=x;
    while(temp>0){
        let last_digit=temp%10;
        reverse=reverse*10+last_digit;
        temp=Math.floor(temp/10);
    }
    return reverse===x;
}

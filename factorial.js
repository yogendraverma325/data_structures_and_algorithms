function factorial(x){
    if(x==0){
        return 1;
    }
    return x*(factorial(x-1))
 }
 let doc=factorial(10);
 let trail_zero=0;
 while(doc%10==0){
     trail_zero++;
     doc=doc/10;
 }
 
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var a=0;
    var b = 1;
    
    var list = [];
    
    if( n === 1){
        list.push(a);
        return(list);
        
    }
    if (n ===2){
        list.push(a);
        list.push(b);
        return(list);
    }
    else{
        list.push(a);
        list.push(b);
        
        for(var i = 2; i<n;i++){
        var c = a + b ;
        list.push(c);
        a = b;
        b = c;
        }
        return(list);
    }
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(12)
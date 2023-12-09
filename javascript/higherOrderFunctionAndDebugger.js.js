function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 -num2;
}

function calculate(num1,num2,operator) {
   return operator(num1,num2);
}

calculate(2,4,add)

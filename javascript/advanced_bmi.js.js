function bmiCalculator (weight, height) {
    var interpretation;
    var bmi = (weight/(height*height));
    console.log(bmi);
    
    bmi = Math.round(bmi*10)/10;
    if (bmi<18.5){
        var interpretation = "Your BMI is "+ bmi + ", so you are underweight.";
    }
    if (bmi>=18.5 && bmi<24.9){
        var interpretation = "Your BMI is "+ bmi + ", so you have normalweight.";
    }
    if (bmi>24.9){
        var interpretation = "Your BMI is "+ bmi + ", so you are overweight.";
    }
    return alert(interpretation);
}
var weight = prompt("Enter your weight.");
var height = prompt("Enter your height in metres.")
bmiCalculator(weight,height);
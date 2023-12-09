var tweet = prompt("Write your tweet.");
var tweet_len = tweet.length;
var rem_len = 180- tweet_len;
console.log("Your tweet has "+ tweet.length +" characters and you have "+ (180 - tweet.length)+ " characters remaining")
console.log("Your tweet is : " +tweet.slice(0,180));


// function bmiCalculator(weight,height){
//     var bmi = Math.round(weight/(Math.pow(height,2)));
//     return bmi;
// }

// var my_bmi = bmiCalculator(65,1.8);
// console.log(my_bmi);
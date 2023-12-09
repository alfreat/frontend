var bottles = 5;
var word = "bottles";

while (bottles>0){
    if (bottles === 1){
        word = "bottle";
    }
    if (bottles === 0){
        word = "No more bottles";
    }
    console.log(bottles+" " +word+" of beer on the wall, "+bottles+" "+ word+" of beer ")
    bottles--;
    console.log("Take one down and pass it around,"+ bottles+" "+ word+" of the beer on the wall.")
}
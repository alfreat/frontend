// verify js working
// alert("javascript added")
var noOfButtons = document.querySelectorAll(".drum").length;
for(i=0;i<noOfButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // alert("igot clicked")
    // this.classList.add("pressed");
    whichButton = this.innerHTML;
    
    makeSound(whichButton);
    // this.classList.toggle("pressed");
    addAnimation(whichButton);

});
}
document.addEventListener("keydown",function(event){
 
    // console.log(event);
    // console.log("passing event line")
    var key = (event.key);
    makeSound(key);
    addAnimation(key);
});









function makeSound(keypress){
    switch (keypress) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();   
            break;
        default: alert(keypress+ " key is not found on the drum kit");
            break;
    }
}


function addAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
    },100)
};

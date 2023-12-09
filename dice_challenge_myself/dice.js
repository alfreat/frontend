
function random_no(){
    return Math.floor(Math.random()*6)+1;
}

var img1_no = random_no();
var img2_no = random_no();

// document.querySelector("")
// to be continued..
document.querySelector(".img1").setAttribute("src","./dice_images/Alea_"+img1_no+".png");
document.querySelector(".img2").setAttribute("src","./dice_images/Alea_"+img2_no+".png");

if(img1_no>img2_no){
    document.querySelector("h1").textContent = "Player1 Wins";
}
else if(img2_no>img1_no){
    document.querySelector("h1").textContent = "Player2 Wins";

}
else{
    document.querySelector("h1").textContent = "It's a Draw";

}

// setTimeout(() => {
//     document.location.reload();
//   }, 3000);
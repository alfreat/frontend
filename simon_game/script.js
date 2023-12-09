
var colors = ["green","red","blue","yellow"]
var generatedSeq = [];
var userSeq = [];
var level = 0;
var started = false;



$("body").on("keydown", function(){
    if(!started){
        started = true;
        $(".challenge").html("How long a sequence can you remember?")
        $(".challenge span").hide();
        
        setTimeout(function(){
            showSequence();
        },500)
    }
    
})

$(".box").on("click", function(){
    var userClickedButton = $(this).attr("id")
    userSeq.push(userClickedButton);
    // console.log(userSeq);

    animateclick(userClickedButton);
    addSound(userClickedButton);
    verifier();
})





function showSequence(){
    level++;
    $(".score p").text(level);
    userSeq = [];
    
    var randomNo = Math.floor(Math.random()*4);
    // console.log(randomNo);
    var randomColor = colors[randomNo];
    generatedSeq.push(randomColor);
    var color = generatedSeq[generatedSeq.length-1]
    animateclick(color);
    addSound(color);
    // console.log(generatedSeq +" Generated");



}

function animateclick(chosenColor){
    // console.log(chosenColor);
    $("#"+chosenColor).addClass("pressed");
    setTimeout(function(){
        $("#"+chosenColor).removeClass("pressed");
    },100)

}


function addSound(chosenColor){
    var sound = new Audio("./sounds/"+chosenColor+".mp3");
    sound.play();
}

function verifier(){
    if(generatedSeq[userSeq.length-1] === userSeq[userSeq.length-1]){
        
        if(userSeq.length === generatedSeq.length){
            setTimeout(function(){
                showSequence();
            },1500);
        }
        // console.log(userSeq +" user");
        
    }
    else{
            gameOver();
          
    }
     
}

function gameOver(){
    $(".challenge").html("<span style ='color:red'>Game Over<span> <br> Press a key to restart")
    level = 0 ;
    $(".score p").text(level);

    started = false;
    generatedSeq = [];
    addSound("wrong")
    $("body").addClass("gameOver");
    setTimeout( function(){
    $("body").removeClass("gameOver");
    },300);
    // startOver();
    
}

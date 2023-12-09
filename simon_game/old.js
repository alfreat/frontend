// for (let level = 1; level < 10; level++) {
   

// } 

// function randomListGenerater(length){
//     var randomList=[];
//     for(i=0;i<length;i++){
//         var num =Math.floor(Math.random()*4);
//         randomList.push(num);
//     }
//     console.log(randomList);
//     return randomList;
// }

// function showSequence(array){
//     var soundgreen = new Audio( "../Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3")
//     // soundgreen.play();

//     for(i=0;i<array.length;i++){
//         index =i;
//         (function(index){
//             switch (array[index]) {
//                 case 0:
//                     $(".green").addClass("pressed");
//                     soundgreen.play();
//                     setTimeout(function(){
//                         $(".green").removeClass("pressed");
                
//                     },1000);
                    
//                     break;
//                 case 1:
//                     $(".red").addClass("pressed");
//                     setTimeout(function(){
//                         $(".red").removeClass("pressed");
                
//                     },1000);
//                     break;
//                 case 2:
//                     $(".blue").addClass("pressed");
//                     setTimeout(function(){
//                         $(".blue").removeClass("pressed");
                
//                     },1000);
//                     break;
//                 case 3:
//                     $(".yellow").addClass("pressed");
//                     // $(".yellow").addClass("pressed");
//                     setTimeout(function(){
//                         $(".yellow").removeClass("pressed");
                
//                     },1000);
//                     break;
//                 default:
//                     break;
//             }
//         })(index);
        
//     }
// }


 var numList =[];
 var lastElement ;
 var level = 1;
 $(".score p").text(level)

for(i=0;1<50;i++){
    randomNumGenerator();
    showNext(lastElement);
    verifier(numList);
}
    





 function randomNumGenerator(){
    // var num = Math.floor(Math.random()*4);
    numList.push(Math.floor(Math.random()*4));
    lastElement = numList[(numList.length)-1]
 }

 function showNext(lastElement){
    switch (lastElement) {
        case 0:
            $(".green").addClass("pressed");
            var soundgreen = new Audio("./sounds/green.mp3")
            soundgreen.play();
            setTimeout(function(){
                $(".green").removeClass("pressed");
        
            },200);
            
            break;
        case 1:
            $(".red").addClass("pressed");
            var soundred = new Audio("./sounds/red.mp3")
            soundred.play();
            setTimeout(function(){
                $(".red").removeClass("pressed");
        
            },100);
            break;
        case 2:
            $(".blue").addClass("pressed");
            var soundblue = new Audio("./sounds/blue.mp3")
            soundblue.play();
            setTimeout(function(){
                $(".blue").removeClass("pressed");
        
            },100);
            break;
        case 3:
            $(".yellow").addClass("pressed");
            var soundyellow = new Audio("./sounds/yellow.mp3")
            soundyellow.play();
            setTimeout(function(){
                $(".yellow").removeClass("pressed");
        
            },100);
            break;
        default:
            break;
    }
 }


 function verifier(numList){
    $(".box").on("click",function(event){
        var clickedButton = $(this).attr("id");
        console.log(clickedButton)
        var clickedButton =parseInt(clickedButton);
        switch (clickedButton) {
            case 0:
                $(".green").addClass("pressed");
                var soundgreen = new Audio("./sounds/green.mp3")
                soundgreen.play();
                console.log(clickedButton)
                setTimeout(function(){
                    $(".green").removeClass("pressed");
            
                },200);
                
                break;
            case 1:
                $(".red").addClass("pressed");
                var soundred = new Audio("./sounds/red.mp3")
                soundred.play();
                setTimeout(function(){
                    $(".red").removeClass("pressed");
            
                },100);
                break;
            case 2:
                $(".blue").addClass("pressed");
                var soundblue = new Audio("./sounds/blue.mp3")
                soundblue.play();
                setTimeout(function(){
                    $(".blue").removeClass("pressed");
            
                },100);
                break;
            case 3:
                $(".yellow").addClass("pressed");
                var soundyellow = new Audio("./sounds/yellow.mp3")
                soundyellow.play();
                setTimeout(function(){
                    $(".yellow").removeClass("pressed");
            
                },100);
                break;
            default:
                break;
        }

        for(i =0;i< numList.length;i++){
            if (clickedButton == numList[i]){
                // do nothing
                console.log("do nothing")
            }
            else{
                gameOver()
                console.log("game over")
                level = 0;
                break;
            }
        }
        level++;
       
        
       
    })
 }

 function gameOver(){
    $("body").addClass("gameover")
    setTimeout(function(){
    $("body").removeClass("gameover")

    },1000)

 }


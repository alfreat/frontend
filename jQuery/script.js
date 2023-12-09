// $("h1").text("Let's query in jQuery")
// $("h1").html("<em>this is done using .html method<em>")

// $("h1").css("color","red")
// $("h1").css("font-size","3rem")
//using addclass to comply departmentalization

// $("h1").addClass("title")
$("button.1").addClass("start")

// $("a").attr("href","https://www.microsoft.com")

// adding eventlisteners 

$("button").click(function(event){

        $("button").css("background-color", "purple")
})
// will check keystrokes in input field only can be changed to document,body,html,etc
// $("input").keydown(function(event){
//     console.log(event.key)
// });
// shows keypresses in h1
// $("html").keydown(function(event){
//     $("h1").text(event.key)
// });

// another way of adding eventlistener using jQuery

$("button").on("mouseover",function(){
    $("button").addClass("hover");

    setTimeout(function(){
        $("button").removeClass("hover");

    },1000);
});

// adding html elements using before, after,prepend,append.
 $("input").before("<h1>Text area is below</h1>");
 $("input").after("<h1>Text area is above</h1>");

//  $("h1.title").prepend("<h3>prepend command</h3>")
//  $("h1.title").append("<h3>append command</h3>")

//jQuery animation  hide-show,toggle,fadeout-fadein,fadetoggle
//slideup-down, slidetoggle
$("button").on("click",function(){
    // $("h1").toggle();

    //fade
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    //slide
    // $("h1").slideToggle();

    //CUSTOM ANIMATION use css with numerical values not with text inside curly braces
    $("h1").fadeOut().fadeIn().animate({"opacity":.5})



    // setTimeout(function(){
    //     $("h1").show();
    // },500);
});

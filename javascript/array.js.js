// var guest_list = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// var guest = prompt("Enter your name.")
// console.log(guest);
// if (guest_list.includes(guest)){
//     alert("Welcome "+guest);
//     }
// else{
//     alert("May be next time.");
        
//     }


// function whosPaying(names) {
//     console.log(names[1]);
    
// /******Don't change the code above*******/
//     var total_people = names.length;
//     var random_positon =(math.floor(Math.random()*total_people));

//     console.log(names[random_positon] +" is paying for lunch.")
//     console.log(random_positon);
 
    
    
    

  
// }
// var names = ["angela","roli","john","tiago"];
//     whosPaying()


function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition - Math.floor(Math.random()* numberOfPeople);
    var randomPerson = names [randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}
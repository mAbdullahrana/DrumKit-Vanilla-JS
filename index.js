for ( var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}


function handleClick () {

  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);


 }



document.addEventListener("keydown" , function(event){
  makeSound(event.key);
  buttonAnimation(event.key)
});

function makeSound (sound) {



 switch (sound){
  case "w": 
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
  break;
  case "a": 
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
  break;

  case "s": 
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
  break;

  case "d": 
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
  break;

  case "j": 
  var snare = new Audio('sounds/snare.mp3');
  snare.play();
  break;

  case "k" : 
  var kick = new Audio ("sounds/kick-bass.mp3")
  kick.play();
  break;

  case "l" :
  var crash = new Audio ("sounds/crash.mp3")
  crash.play();
  break;




  default : console.log(sound);
 }

}


function buttonAnimation(currentKey){
  document.querySelector("." + currentKey).classList.add("pressed");
  
  setTimeout(function(){
    document.querySelector("." + currentKey).classList.remove("pressed");

  },100)
  
}







// for(var i = 0; i <= document.querySelectorAll(".drum").length ; i++ ){
// document.querySelectorAll(".drum")[i].addEventListener("click", handle)
// }
// function handle(){
  
//     var tom = this.innerHTML;
//    makeSound(tom);
   
  
    
//   }

// document.addEventListener("keypress", function(){
  
// // makeSound(e.key);
// alert("Hi");

// });

// function makeSound(l){

//   switch(l){
//     case "w" :
//       var w = new Audio("sounds/tom-1.mp3")
//       w.play();
//     break;
//     case "a" :
//       var a = new Audio("sounds/tom-2.mp3")
//       a.play();
//     break;
//     case "s" :
//       var s = new Audio("sounds/tom-3.mp3")
//       s.play();
//     break;
//     case "d" :
//       var d = new Audio("sounds/tom-4.mp3")
//       d.play();
//     break;
//     case "j" :
//       var j = new Audio("sounds/snare.mp3")
//       j.play();
//     break;
//     case "k" :
//       var k = new Audio("sounds/kick-bass.mp3")
//       k.play();
//     break;
//     case "l" :
//       var l = new Audio("sounds/crash.mp3")
//       l.play();
//     break;

//     default : console.log(l);
  
    
      
  
//     }
// }

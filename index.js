 for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var x=this;
        if(x===document.querySelectorAll(".drum")[0]){
            var audio1=new Audio("sounds/crash.mp3");
         audio1.play()
            x.style.color="white";
        }
        else if(x===document.querySelectorAll(".drum")[1]){
            var audio2=new Audio("sounds/kick-bass.mp3");
         audio2.play()
         x.style.color="white";
        }
        else if(x===document.querySelectorAll(".drum")[2]){
            var audio3=new Audio("sounds/snare.mp3");
         audio3.play()
         x.style.color="white";
        }
        else if(x===document.querySelectorAll(".drum")[3]){
            var audio4=new Audio("sounds/tom-1.mp3");
         audio4.play()
         x.style.color="white";
        }
        else if(x===document.querySelectorAll(".drum")[4]){
            var audio5=new Audio("sounds/tom-2.mp3");
         audio5.play()
         x.style.color="white";
        }
        else if(x===document.querySelectorAll(".drum")[5]){
            var audio6=new Audio("sounds/tom-3.mp3");
         audio6.play()
         x.style.color="white";
        }
        else if(x===document.querySelectorAll(".drum")[6]){
            var audio7=new Audio("sounds/tom-4.mp3");
         audio7.play()
         x.style.color="white";
        }

        
     });

 }





  /*var audio1=new Audio("sounds/crash.mp3");
         audio1.play();*/
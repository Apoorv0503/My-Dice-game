//------------------------------------------------------------for dice 1-------------------------------------------------------------------------------

var random1 = Math.random() * 6;
var finalRand1 = Math.floor(random1) + 1;

var path1="images/dice"+finalRand1+".png";
document.querySelector(".img1").setAttribute("src" , path1);


//----------------------------------------------------------------for dice 2--------------------------------------------------------------------------
var random2 = Math.random() * 6;
var finalRand2 = Math.floor(random2) + 1;

var path2="images/dice"+finalRand2+".png";
document.querySelector(".img2").setAttribute("src" , path2);

//----------------------------------------------------------------RESULT------------------------------------------------------------------------------
if(finalRand2>finalRand1)
  {
      document.querySelector("h1").innerHTML= "player 2 won!";
   }

    else if(finalRand2<finalRand1)
     {
         document.querySelector("h1").innerHTML= "player 1 won!";
      }
    else {
      document.querySelector("h1").innerHTML= "Match Draw!";
    }

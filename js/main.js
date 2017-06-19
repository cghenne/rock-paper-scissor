$(document).ready(function(){
    $("h1").click(function(){
        console.log('You Clicked on H1');
    });
});


var items = ["scissors", "paper", "rock"];
var score =[0,0];


function myFunction() {
   
    
    }


//switch() {
//
//    case 0:
//        player[0] = items[0];
//        player[1] = items[1];
//        break;
//
//    case 1:
//        player[0] = items[2];
//        player[1] = items[1];
//        break;
//
//    case 2:
//        player[0] = items[0];
//        player[1] = items[2];
//        break;
//
//    case 3:
//        player[0] = items[1];
//        player[1] = items[0];
//        break;
//
//    case 4:
//        player[0] = items[2];
//        player[1] = items[0];
//        break;
//
//    case 5:
//        player[0] = items[2];
//        player[1] = items[2];
//        break;
//
//    case 6:
//        player[0] = items[0];
//        player[1] = items[0];
//        break;
//
//    case 7:
//        player[0] = items[1];
//        player[1] = items[2];
//        break;
//
//    case 8:
//        player[0] = items[1];
//        player[1] = items[1];
//        break;
//                 }



while (score[0] <3 && score[1] <3) {
    
var player = [prompt('player 1'), prompt('player 2')];

if (player[0] === items[0] && player[1] === items[1])
{
    document.write ("Player One Wins");
    score[0] = score[0] + 1;
}

if (player[0] === items[0] && player[1] === items[2])
{
    document.write ("Player Two Wins");
    score[1] = score[1] + 1; 
}

if (player[0] === items[1] && player[1] === items[0])
{
    document.write ("Player Two Wins");
    score[1] = score[1] + 1; 
}

if (player[0] === items[2] && player[1] === items[0])
{
    document.write ("Player One Wins");
    score[0] = score[0] + 1;
}

if (player[0] === items[2] && player[1] === items[2])
{
    document.write ("Draw! Play again!");
}

if (player[0] === items[0] && player[1] === items[0])
{
    document.write ("Draw! Play again!");
}

if (player[0] === items[1] && player[1] === items[2]) 
{ 
    document.write ("Player One Wins");
    score[0] = score[0] + 1;
}

if (player[0] === items[1] && player[1] === items[1]) 
{ 
    document.write ("Draw! Play again!");
}

if (player[0] === items[2] && player[1] === items[1])
{
    document.write ("Player Two Wins");
    score[1] = score[1] + 1; 
}; 
                                                 
}


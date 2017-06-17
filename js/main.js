var player = ["scissors", "paper"]
var items = ["scissors", "paper", "rock"]



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





if (player[0] === items[0] && player[1] === items[1])
{
    document.write ("Player One Wins")
}

if (player[0] === items[0] && player[1] === items[2])
{
    document.write ("Player Two Wins")
}

if (player[0] === items[1] && player[1] === items[0])
{
    document.write ("Player Two Wins")
}

if (player[0] === items[2] && player[1] === items[0])
{
    document.write ("Player 1 Wins")
}

if (player[0] === items[2] && player[1] === items[2])
{
    document.write ("Draw! Play again!")
}

if (player[0] === items[0] && player[1] === items[0])
{
    document.write ("Draw! Play again!")
}

if (player[0] === items[1] && player[1] === items[2]) 
{ 
    document.write ("Player 1 Wins")
}

if (player[0] === items[1] && player[1] === items[1]) 
{ 
    document.write ("Draw! Play again!")
}

if (player[0] === items[2] && player[1] === items[1])
{
    document.write ("Player Two Wins")
}
var circle = document.getElementsByClassName("nobtn");

circle[0].addEventListener("click", change);
circle[0].addEventListener("mouseover", change);

function change()
{
    var i = Math.floor(Math.random() * 300)+1;
    var j = Math.floor(Math.random() * 300)+1;
    circle[0].style.left = i+"px";
    circle[0].style.top = j+"px";
}

var yesButton = document.getElementsByClassName("btn");
yesButton[0].addEventListener("click", confirmButton);
function confirmButton()
{
    document.querySelector("h1").innerHTML = "Thank you Babe!😘 <br>Cya at 6:00pm today😉. Get some chocolate.🍫</br>";
    document.querySelector("img").src = "./Images/milk-and-mocha-thank-you.gif";
    yesButton[0].style.visibility = 'hidden';
    circle[0].style.visibility = 'hidden';
}
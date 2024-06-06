var randomNo1 = Math.floor(6*Math.random()) + 1;
var randomNo2 = Math.floor(6*Math.random()) + 1;


document.querySelector(".img1").setAttribute("src", `./images/dice${randomNo1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNo2}.png`);

if(randomNo1 > randomNo2)
    document.querySelector("h1").textContent = "🚩 Player 1, Wins!!";
else if(randomNo1 < randomNo2)
    document.querySelector("h1").textContent = "Player 2, Wins!! 🚩";
else 
    document.querySelector("h1").textContent = "🚩 Draw!";
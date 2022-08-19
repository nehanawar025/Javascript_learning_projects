let firstdice;
let seconddice;

// Math.random()*6-->0-6
// Math.random()*6 +1 -->1-6


document.getElementById("roll").onclick = function()
{
    firstdice = Math.floor(Math.random()*6) + 1
    seconddice = Math.floor(Math.random()*6) + 1
    
    document.getElementById("firstDice").innerHTML = firstdice
    document.getElementById("secondDice").innerHTML = seconddice
}


document.getElementById("reset").onclick = function()
{
    firstdice = 0
    seconddice = 0
    document.getElementById("firstDice").innerHTML = firstdice
    document.getElementById("secondDice").innerHTML = seconddice
}

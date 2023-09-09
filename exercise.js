// Exercise NO 1

let num = Math.floor(Math.random() * 10) + 1
let chances = 0
let userInput 
if (userInput > 100 && userInput < 20) {
    alert("Invalid number")
}
while (num != userInput) {
    userInput = prompt("Guess the number between 1 to 100")
    chances++
    if (userInput < num) {
        alert("The number you enter is small,try again")   
    }
    if (userInput > num) {
        alert("The number you enter is big,try again")
    }
}
if (userInput == num) {
    alert("Bingo the number is correct")
    alert("Correct num is " + num)
alert(" The chances You take are " + chances)
alert("The score of you is " + (100 - chances))
}
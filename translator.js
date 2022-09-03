const inputBox = document.querySelector("#text-input");
const translateBtn = document.querySelector("#translate-btn");
const output = document.querySelector("#output");

// need object for the alphabet, numbers, special symbols
const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": "/",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": "._._._",
    ",": "__..__",
    "?": "..__..",
    ";": "_._._.",
    ":": "___...",
    "-": "_...._",
    "/": "_.._.",
    "'": ".____."

 }


export const translateToMorse = () => {

}

// output
// inputBox.value.innerHTML = output
// however must be declared within function after the translation has occurred 

// event listener for the button to run the function
translateBtn.addEventListener("click", translateToMorse);
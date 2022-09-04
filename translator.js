// instead of grabbing everything at the top of the page, called document.getElementById within the function

function translateToMorse(plainText) {
    // set the text value to an empty string
    document.getElementById("myText").value = "";
    //store morse code and the alphabet within arrays to allow us to iterate through them with a for loop
    const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", "....", "-....", "--...", "---..", "----.", "-----", "/", "._._._", "__..__", "..__..", "_._._.", "___...", "_...._", "_.._.", ".____."];
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", ".", ",", "?", ";", ":", "-", "/", "'"];
    var text = "";
    //for loop going through the inputted text 
    for (var i = 0; i < plainText.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            // converting inputted text to caps to compare to alphabet array
            
            if (plainText[i].toUpperCase() == alphabet[j]) {
                text += morseCode[j] + " ";
            }
        }
    }

    document.getElementById("morseCode").innerHTML = text;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToMorse = void 0;
//store morse code and the alphabet within arrays to allow us to iterate through them with a for loop 
var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", "....", "-....", "--...", "---..", "----.", "-----", "/", "._._._", "__..__", "..__..", "_._._.", "___...", "_...._", "_.._.", ".____."];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", ".", ",", "?", ";", ":", "-", "/", "'"];

var translateToMorse = function translateToMorse(plainText) {
  //for loop going through the inputted text 
  var result = [];

  for (var i = 0; i < plainText.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      // converting inputted text to caps to compare to alphabet array
      if (plainText[i].toUpperCase() == alphabet[j]) {
        result.push(morseCode[j] + " ");
      }
    }
  }

  return result.join(" ");
};

exports.translateToMorse = translateToMorse;
import {
    translateToMorse
} from "./translator.js"

document.getElementById("myText").addEventListener("change", () => {
    let input = document.getElementById("myText").value;
    const translation = translateToMorse(input);
    document.getElementById("morseCode").innerHTML = translation;
})
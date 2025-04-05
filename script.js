import { translateToMorse } from "./logic.js"
import { btn, textInput, textOutput } from "./dom.js"


btn.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        textOutput.style.color = "#7c2d12";
        const inputValue = textInput.value;
        const translation = translateToMorse(inputValue)
        textOutput.value = translation
    } catch (e) {
        textOutput.value = e.message;
        textOutput.style.color = "red"
    }
});
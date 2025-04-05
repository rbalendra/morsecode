import { translateToMorse, translateToEnglish } from "./logic.js"
import { btn, textInput, textOutput } from "./dom.js"



btn.addEventListener("click", (e) => {
    e.preventDefault();
        textOutput.style.color = "#7c2d12";
        const inputValue = textInput.value;


        try {
            let translation = ""

            if(/^[.\-\s|]*$/.test(inputValue.trim())) { //this checks for input if it has morse characters
            translation = translateToEnglish(inputValue) 
            } else {
                translation = translateToMorse(inputValue)
            }
            textOutput.value = translation //whichever func gets chosen the output work accordingly
        
        
        } catch (error) {
            textOutput.value = error.message;
            textOutput.style.color = "red"
        }
            
    });










// console.log(translateToEnglish(".... . .-.. .-.. --- | .... --- ... | .- .-. . | -.-- --- ..-"))
import morseJson from "./morsecode.json" with { type: "json" };



export const translateToMore = (textInput) => {
    if (typeof textInput !== "string") {
      throw new Error("This input is not a string")
    }
    

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(textInput)) {
        throw new Error("This input has special characters")
    }

    const upperInput = textInput.toUpperCase().trim();
   
    const words = upperInput.split(' ') //creates an array of words
    
 
    const MorseWords = words.map((word) => {
        
        const letters = word.split('')
        const morseLetters = letters.map((letter) => {
            return morseJson[letter] || ""
        })
        return morseLetters.join(" ")
    })
    return MorseWords.join(" | ")
       
}


console.log(translateToMore("hello how are you"))



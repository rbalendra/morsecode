import morseJson from "./morsecode.json" with { type: "json" };


//TRANSLATE FROM ENGLISH TO MORSE
export const translateToMorse = (textInput) => {
    if (typeof textInput !== "string") {
      throw new Error("This input is not a string")
    }

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(textInput)) {
        throw new Error("This input has special characters")
    }

    const upperInput = textInput.toUpperCase().trim();
    console.log(upperInput)
    const words = upperInput.split(' ') //creates an array of words
    // console.log(words) // ['HELLO', 'HOW', 'ARE', 'YOU']
    const validLetters = Object.keys(morseJson) // we retrieve the keys of json file into validletters
    

    let morseWords = []

    //we need to loop over each words to make it into individual characters so we can match it with morse code
    morseWords = words.map((word)=> {
    const letters = word.split('')
        // console.log(letters) //  ['H', 'E', 'L', 'L', 'O'] ['H', 'O', 'W']

        //map over the morsecode
        const morseLetters = letters.map((morseChar) => {
            if (!validLetters.includes(morseChar)) {
                throw new Error(`Invalid character entered: ${morseChar}`)
            }
            return morseJson[morseChar]
        })
        //  console.log(morseLetters.join("0")) //.-- .... .... 0 ... .... --.
        return morseLetters.join(" ") //then you join the individual morse chars to individual words 
    })
    return morseWords.join(" | ") //finally it will join the words into sentences with seperation
}




/*-----------------------------------------------------------------------------------------------------------------------------------------*/





//TRANSLATE FROM MORSE TO ENGLISH
const reverseMorseMap = {}
    Object.entries(morseJson).forEach(([morseAlpha, morseValue]) => { //object entries will take an object and returns an array (https://www.javascripttutorial.net/object/iterate-object-in-javascript/)
        // console.log(`${morseAlpha} : ${morseValue}`) //A : .- B : -...
        reverseMorseMap[morseValue] = morseAlpha; //this will populate the reversemorsemap with the morsevalues
        console.log(reverseMorseMap) //..-.: "F"
    })


export const translateToEnglish = (morseInput) => {
    if (typeof morseInput !== "string") {
    throw new Error("Morse input must be string")
    }
    
    if (!/^[.\-\s|]*$/.test(morseInput)) {
        throw new Error("Morse input has invalid characters")
    }

    const morseWords = morseInput.trim().split(" | ")
    const englishWords = morseWords.map((morseWord) => {
        const morseChars = morseWord.split(" ")
        console.log(morseChars) //['....', '.', '.-..', '.-..', '---']
        const letters = morseChars.map((code) => { //["H", "E", "L", "L", "O"]
            // console.log(reverseMorseMap[code]) 
            return reverseMorseMap[code]
        })
        return letters.join("") //HELLO
    })
    return englishWords.join(" ") //HELLO HOW ARE YOU

}
    
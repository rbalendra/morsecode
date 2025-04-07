### SETUP OF PROJECT

- index.html: HTML file for the app
- logic.js: main translated functions are added here
- dom.js: selecting dom elements here and reference list
- script.js: Event listeners and UI logic
- logic.test.js: unit tests for translation functions

### LOGIC

- load morsecode.json file

##### write translate to morsecode function

- validate if input is not string throw error
- validate if input has special characters
- convert text input to uppercase and trim spaces
- split text into array of words
- for each word
  - split word into individual characters
  - for each letter
    - if the letter is not a key in morseJson throw an error
    - look up corresponding morsecode
  - join morse codes for letters with spaces --> creates a morse word
- finally join all morse words with some sort of delimiter |
- return the morse string

##### write reverse translation function (morse --> english)

- initialise an empty object
- for each letter / code in morseJson
  - swap the key and values of morseJson
- get morseinput and validate strings/special characters
- split morseinput into array of morse words using delimiter |
- for each morse word
  - split the morse word into letters
  - for each morse letter
    - validate if they are in the new morse object json
  - join letters to form an english word
- join all english word with a space
- retujrn final english text

### DOM

- get reference of inputs/outputs text area and buttons

### SCRIPT

- set up event listener to get intput values and call the function
- validate if the words entered with regex
- catch errors

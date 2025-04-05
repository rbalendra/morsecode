
import { translateToMorse } from "./logic.js"
import morseJson from "./morsecode.json" with { type: "json" };

export const btn = document.querySelector('#morse__btn')
export const textInput = document.querySelector('#morse__input')
export const textOutput = document.querySelector('#morse__output')
const morseChart = document.querySelector("#morse__chart")

Object.entries(morseJson).forEach(([key, value]) => { //referred to https://www.javascripttutorial.net/object/iterate-object-in-javascript/
    const listItem = document.createElement("li")
    listItem.textContent = `${key} ➔ ${value}`
    morseChart.appendChild(listItem) //append to the parent UL the child which is LI of listItem
})
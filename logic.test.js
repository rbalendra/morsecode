import { translateToMorse, translateToEnglish } from "./logic.js";

describe("translateToMorse function", () => {
    test("should throw an error if input is not a string", () => {
        expect(() => { translateToMorse(5) }).toThrow("This input is not a string")
    });

    test("should throw an error if the input has special characters", () => {
        expect(() => { translateToMorse("hello!!!!") }).toThrow("This input has special characters")
    })
    
    test("should translate A to .-", () => {
        expect(translateToMorse("A")).toBe(".-")
    });
});



describe("translateToEnglish function", () => {
    test("should throw an error if input is not a string", () => {
        expect(() => translateToEnglish(5)).toThrow("Morse input must be string");
    });

    test("should throw an error if the input has invalid characters", () => {
        expect(() => translateToEnglish("hello")).toThrow("Morse input has invalid characters");
    });
    

    test("should translate '.-' to 'A'", () => {
        expect(translateToEnglish(".-")).toBe("A");
    });

})
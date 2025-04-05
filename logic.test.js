import { translateToMorse } from "./logic.js";

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
import { deepStrictEqual } from "assert";
import { translateToMore } from "./logic.js";

describe("translateToMore function", () => {
    test("should throw an error if input is not a string", () => {
        expect(() => { translateToMore(5) }).toThrow("This input is not a string")
    });

    test("should throw an error if the input has special characters", () => {
        expect(() => { translateToMore("hello!!!!") }).toThrow("This input has special characters")

    })
    
    test("should translate A to .-", () => {
        expect(translateToMore("A")).toBe(".-")
    });

}); 
import { multiplier } from "./calculator";
import { divider } from "./calculator";
import { subtractor } from "./calculator";
import { adder } from "./calculator";
import { expect, test } from "vitest";

test("multiplier test", () => {
    let result = multiplier(3, 4);
    expect(result).toEqual(12);
});

test("adder test", () => {
    let result = adder(3, 4);
    expect(result).toEqual(7);
});
test ("subtractor test", () => {
    let result = subtractor(10, 4);
    expect (result).toEqual (6);
});

test ("divider test", () => {
    let result = divider(20, 4);
    expect (result).toEqual (5);
}); 
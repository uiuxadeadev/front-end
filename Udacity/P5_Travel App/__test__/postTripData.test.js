// Import the js file to test
import { postTripData } from "../src/client/js/postTripData"

describe("Testing the submit functionality", () => {
    test("Testing the postTripData() function", () => {
    expect(postTripData).toBeDefined();
})});
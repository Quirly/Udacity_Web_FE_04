// Import the js file to test
import { getSentiment } from "../src/client/js/getSentiment.js"

describe("Unit Test getSentiment() function", () => {
    test("getSentiment function should be defined", () => {
        expect(getSentiment).toBeDefined();
    });
});
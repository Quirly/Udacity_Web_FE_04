// Import the js file to test
import { getSentiment } from "../src/client/js/getSentiment"

describe("Unit Test getSentiment() function", () => {
    test("GetSentiment function should be defined", () => {
        expect(getSentiment).toBeDefined();
    });
});
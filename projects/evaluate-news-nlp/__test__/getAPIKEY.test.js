// Import the js file to test
import { getAPIKEY } from "../src/client/js/getAPIKEY.js"

describe("Unit Test getAPIKEY() function", () => {
    test("GetAPIKEY function should be defined", () => {
        expect(getAPIKEY).toBeDefined();
    });
});
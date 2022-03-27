// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

describe("Unit Test formHandler() function", () => {
    test("FormHandler function should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });
});
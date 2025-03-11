import { Echo } from "../src/commands/Echo";

describe("Echo Command", () => {
    let echo: Echo;

    beforeEach(() => {
        echo = new Echo();
    });

    it("should return the provided text", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        echo.execute(["Hello World!"]);

        expect(consoleSpy).toHaveBeenCalledWith("Hello World!");
        consoleSpy.mockRestore();
    })
});
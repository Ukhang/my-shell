import { Cd } from "../src/commands/Cd";
import path from "path";

describe("Cd Command", () => {
    let cd: Cd;
    let originalCwd: string;

    beforeEach(() => {
        cd = new Cd();
        originalCwd = process.cwd();
    });

    afterEach(() => {
        process.chdir(originalCwd);
    });

    it("should change to a valid directory", () => {
        const testDir = path.resolve("src");
        cd.execute([testDir]);
        expect(process.cwd()).toBe(testDir);
    });

    it("should show an error if directory does not exit", () => {
        const consoleSpy = jest.spyOn(console, "error").mockImplementation();
        cd.execute(["non_existent_directory"]);

        expect(consoleSpy).toHaveBeenCalledWith("Error: Directory not found");
        consoleSpy.mockRestore();
    });
});
import { Touch } from "../src/commands/Touch";
import * as fs from "fs/promises";

jest.mock("fs/promises", () => ({
  writeFile: jest.fn(),
}));

describe("Touch Command", () => {
  let touch: Touch;

  beforeEach(() => {
    touch = new Touch();
    jest.clearAllMocks(); // Clear previous mocks to avoid interference
  });

  it("should show error if file already exists", async () => {
    // Ensure writeFile is mocked to reject with an EEXIST error
    (fs.writeFile as jest.Mock).mockRejectedValue({ code: "EEXIST" });

    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    await touch.execute(["testfile.txt"]); // This triggers the error

    expect(consoleSpy).toHaveBeenCalledWith(`Error: File "testfile.txt" already exists.`);
    consoleSpy.mockRestore();
  });

  it("should show usage error if no filename is provided", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    await touch.execute([]); // This should log the usage message

    expect(consoleSpy).toHaveBeenCalledWith("Usage: touch <filename>");
    consoleSpy.mockRestore();
  });
});

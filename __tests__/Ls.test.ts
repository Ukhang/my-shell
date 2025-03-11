import { Ls } from "../src/commands/Ls";
import fs from "fs/promises";

jest.mock("fs/promises");

describe("Ls Command", () => {
  let ls: Ls;

  beforeEach(() => {
    ls = new Ls();
  });

  it("should list files in the current directory", async () => {
    (fs.readdir as jest.Mock).mockResolvedValue(["file1.txt", "file2.txt"]);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    await ls.execute([]);

    expect(consoleSpy).toHaveBeenCalledWith("file1.txt\nfile2.txt");
    consoleSpy.mockRestore();
  });
});

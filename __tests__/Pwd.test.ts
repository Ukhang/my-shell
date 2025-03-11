import { Pwd } from "../src/commands/Pwd";

describe("Pwd Command", () => {
  let pwd: Pwd;

  beforeEach(() => {
    pwd = new Pwd();
  });

  it("should print the current working directory", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    pwd.execute();

    expect(consoleSpy).toHaveBeenCalledWith(process.cwd());
    consoleSpy.mockRestore();
  });
});
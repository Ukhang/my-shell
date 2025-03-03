import readline from "readline";
import { Executor } from "./Executor";

export class Shell {
  private executor: Executor;
  private rl: readline.Interface;

  constructor() {
    this.executor = new Executor();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start() {
    this.prompt();
    this.rl.on("line", async (input) => { 
      await this.executor.execute(input);
      this.prompt();
    });

    this.rl.on("close", () => {
      console.log("\nGoodbye!");
      process.exit(0);
    });
  }

  private prompt() {
    process.stdout.write("my-shell$ ");
  }
}

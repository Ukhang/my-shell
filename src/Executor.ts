import { BuiltinCommand } from "./commands/BuiltinCommand";
import { Exit } from "./commands/Exit";

export class Executor {
  private builtins: { [key: string]: BuiltinCommand } = {};

  constructor() {
    this.builtins["exit"] = new Exit();
  }

  execute(command: string) {
    const [cmd, ...args] = command.split(" ");

    if (cmd in this.builtins) {
      this.builtins[cmd].execute(args);
    } else {
      console.log(`Command not found: ${cmd}`);
    }
  }
}

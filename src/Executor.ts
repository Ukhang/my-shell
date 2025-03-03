import { BuiltinCommand } from "./commands/BuiltinCommand";
import { Echo } from "./commands/Echo";
import { Exit } from "./commands/Exit";
import { Pwd } from "./commands/Pwd";
import { Cd } from "./commands/Cd";

export class Executor {
  private builtins: { [key: string]: BuiltinCommand } = {};

  constructor() {
    this.builtins["exit"] = new Exit();
    this.builtins["echo"] = new Echo();
    this.builtins["pwd"] = new Pwd();
    this.builtins["cd"] = new Cd();
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

import { BuiltinCommand } from './commands/BuiltinCommand';
import { Echo } from './commands/Echo';
import { Exit } from './commands/Exit';
import { Pwd } from './commands/Pwd';
import { Cd } from './commands/Cd';
import { Ls } from './commands/Ls';
import { Touch } from './commands/Touch';
import { Cat } from './commands/Cat';
import { Clear } from './commands/Clear';
import { Mkdir } from './commands/Mkdir';

export class Executor {
  private builtins: { [key: string]: BuiltinCommand } = {};

  constructor() {
    this.builtins['exit'] = new Exit();
    this.builtins['echo'] = new Echo();
    this.builtins['pwd'] = new Pwd();
    this.builtins['cd'] = new Cd();
    this.builtins['ls'] = new Ls();
    this.builtins['touch'] = new Touch();
    this.builtins['cat'] = new Cat();
    this.builtins['clear'] = new Clear();
    this.builtins['mkdir'] = new Mkdir();
  }

  async execute(command: string): Promise<void> {
    const [cmd, ...args] = command.split(' ');

    if (cmd in this.builtins) {
      await this.builtins[cmd].execute(args);
    } else {
      console.log(`Command not found: ${cmd}`);
    }
  }
}

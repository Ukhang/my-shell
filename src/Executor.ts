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
import { Rmdir } from './commands/Rmdir';
import { Rm } from './commands/Rm';
import { Cp } from './commands/Cp';
import { Mv } from './commands/Mv';
import { Ping } from './commands/Ping';
import { Curl } from './commands/Curl';
import { Ps } from './commands/Ps';
import { Kill } from './commands/Kill';
import { Chmod } from './commands/Chmod';
import { Jobs } from './commands/Jobs';
import { Fg } from './commands/Fg';
import { Bg } from './commands/Bg';
import { Chown } from './commands/Chown';

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
    this.builtins['rmdir'] = new Rmdir();
    this.builtins['rm'] = new Rm();
    this.builtins['cp'] = new Cp();
    this.builtins['mv'] = new Mv();
    this.builtins['ping'] = new Ping();
    this.builtins['curl'] = new Curl();
    this.builtins['ps'] = new Ps();
    this.builtins['kill'] = new Kill();
    this.builtins['chmod'] = new Chmod();
    this.builtins['jobs'] = new Jobs();
    this.builtins['fg'] = new Fg();
    this.builtins['bg'] = new Bg();
    this.builtins['chown'] = new Chown();
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

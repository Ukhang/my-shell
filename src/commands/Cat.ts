import { BuiltinCommand } from './BuiltinCommand';
import * as fs from 'fs';

export class Cat extends BuiltinCommand {
  execute(args: string[]) {
    const filename = args[0];
    if (!filename) {
      console.log('Usage: cat <filename>');
      return;
    }

    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
        return;
      }
      console.log(data);
    });
  }
}

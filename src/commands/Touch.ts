import { BuiltinCommand } from './BuiltinCommand';
import * as fs from 'fs';

export class Touch extends BuiltinCommand {
  execute(args: string[]) {
    const filename = args[0];
    if (!filename) {
      console.log('Usage: touch <filename>');
      return;
    }

    try {
      fs.writeFileSync(filename, '', { flag: 'wx' });
      console.log(`File ${filename} created`);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error creating file:', err.message);
      } else {
        console.error('Unknown error occurred while creating the file.');
      }
    }
  }
}

import { BuiltinCommand } from './BuiltinCommand';
import fs from 'fs/promises';

export class Ls extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    try {
      const files = await fs.readdir(process.cwd());
      console.log(files.join('\n'));
    } catch (err) {
      console.error('Error reading directory:', err);
    }
  }
}

import { BuiltinCommand } from './BuiltinCommand';
import fs from 'fs/promises';
import path from 'path';

export class Rmdir extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.log('Usage: rmdir <directory>');
      return;
    }

    const dirPath = path.resolve(args[0]);

    try {
      await fs.rmdir(dirPath);
      console.log(`Directory removed: ${dirPath}`);
    } catch (error) {
      console.error(`Error removing directory: ${error}`);
    }
  }
}

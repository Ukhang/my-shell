import { BuiltinCommand } from './BuiltinCommand';
import fs from 'fs/promises';
import path from 'path';

export class Rm extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.log('Usage: rm <filename>');
      return;
    }

    const filePath = path.resolve(args[0]);

    try {
      await fs.unlink(filePath);
      console.log(`File deleted: ${filePath}`);
    } catch (error) {
      console.error(`Error deleting file: ${error}`);
    }
  }
}
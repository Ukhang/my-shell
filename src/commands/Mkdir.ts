import { BuiltinCommand } from './BuiltinCommand';
import fs from 'fs/promises';
import path from 'path';

export class Mkdir extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.log('Usage: mkdir <directory>');
      return;
    }

    const dirPath = path.resolve(args[0]);

    try {
      await fs.mkdir(dirPath, { recursive: true });
      console.log(`Directory created: ${dirPath}`);
    } catch (error) {
      console.error(`Error creating directory: ${error}`);
    }
  }
}

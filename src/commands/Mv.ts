import { BuiltinCommand } from './BuiltinCommand';
import fs from 'fs/promises';
import path from 'path';

export class Mv extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length < 2) {
      console.log('Usage: mv <source> <destination>');
      return;
    }

    const sourcePath = path.resolve(args[0]);
    const destinationPath = path.resolve(args[1]);

    try {
      await fs.rename(sourcePath, destinationPath);
      console.log(`Moved/Renamed: ${sourcePath} -> ${destinationPath}`);
    } catch (error) {
      console.error(`Error moving/renaming: ${error}`);
    }
  }
}

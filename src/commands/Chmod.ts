import { BuiltinCommand } from './BuiltinCommand';
import fs from 'fs/promises';

export class Chmod extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length > 2) {
      console.log('Usage: chmod [permissions] [file]');
      return;
    }

    const [permissions, file] = args;

    try {
      await fs.chmod(file, permissions);
      console.log(`Permissions of '${file}' changed to ${permissions}`);
    } catch (error) {
      console.error(`Error changing permissions: ${(error as Error).message}`);
    }
  }
}

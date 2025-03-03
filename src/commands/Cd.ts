import { BuiltinCommand } from './BuiltinCommand';
import path from 'path';

export class Cd extends BuiltinCommand {
  execute(args: string[]): void {
    if (args.length === 0) {
      console.log('Usage: cd <directory>');
      return;
    }

    try {
      process.chdir(path.resolve(args[0]));
      console.log(`Changed directory to ${process.cwd()}`);
    } catch (error) {
      console.error('Error: Directory not found');
    }
  }
}

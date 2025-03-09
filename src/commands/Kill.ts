import { BuiltinCommand } from './BuiltinCommand';

export class Kill extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.error('Usage: kill <PID>');
      return;
    }

    const pid = parseInt(args[0], 10);
    if (isNaN(pid)) {
      console.error('Error: Invalid PID');
      return;
    }

    try {
      process.kill(pid);
      console.log(`Process ${pid} terminated successfully.`);
    } catch (error) {
      console.error(
        `Error terminating process ${pid}: ${(error as Error).message}`,
      );
    }
  }
}

import { BuiltinCommand } from './BuiltinCommand';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class Chown extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length !== 2) {
      console.log('Usage: chown [owner] [file]');
      return;
    }

    const [owner, file] = args;

    try {
      const command =
        process.platform === 'win32'
          ? `icacls "${file}" /setowner "${owner}"` // Windows uses icacls for ownership changes
          : `chown ${owner} ${file}`; // Linux/macOS uses chown command

      const { stdout, stderr } = await execAsync(command);

      if (stderr) {
        console.error(`chown error: ${stderr}`);
        return;
      }

      console.log(`Ownership of ${file} has been changed to ${owner}:`);
      console.log(stdout);
    } catch (error) {
      console.error(
        `Error changing ownership of ${file}: ${(error as Error).message}`,
      );
    }
  }
}

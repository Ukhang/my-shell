import { BuiltinCommand } from './BuiltinCommand';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export class Ping extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.log('Usage: ping <host>');
      return;
    }

    const host = args[0];
    const command = process.platform === 'win32' ? `ping -n 4 ${host}` : `ping -c 4 ${host}`;

    try {
      const { stdout, stderr } = await execPromise(command);
      console.log(stdout.trim());

      if (stderr) {
        console.error(`Ping error: ${stderr.trim()}`);
      }
    } catch (error) {
      console.error(`Ping failed: ${error}`);
    }

    console.log(`Ping to ${host} completed.`);
  }
}
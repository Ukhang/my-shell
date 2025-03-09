import { BuiltinCommand } from './BuiltinCommand';

export class Curl extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.log('Usage: curl <URL>');
      return;
    }

    const url = args[0];

    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return;
      }

      const text = await response.text();
      console.log(text);
    } catch (error) {
      console.error(`Failed to fetch: ${error}`);
    }
  }
}

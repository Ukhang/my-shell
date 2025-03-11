import readline from 'readline';
import { Executor } from './Executor';

export class Shell {
  private executor: Executor;
  private rl: readline.Interface;

  constructor() {
    this.executor = new Executor();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start() {
    this.prompt();
    this.rl.on('line', (input) => {
      const parsedInput = this.parseSingleQuotes(input);
      this.executor.execute(parsedInput);
      this.prompt();
    });

    this.rl.on('close', () => {
      console.log('\nGoodbye!');
      process.exit(0);
    });
  }

  private prompt() {
    process.stdout.write('my-shell$ ');
  }

  // Updated function to handle single quotes and preserve content
  private parseSingleQuotes(input: string): string {
    let inSingleQuote = false;
    let result = '';
    let currentPart = '';

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (char === "'" && !inSingleQuote) {
        inSingleQuote = true;
        continue;
      } else if (char === "'" && inSingleQuote) {
        inSingleQuote = false;
        continue;
      } else {
        if (inSingleQuote) {
          currentPart += char;
        } else {
          result += char;
        }
      }
    }

    result += currentPart;
    return result;
  }
}

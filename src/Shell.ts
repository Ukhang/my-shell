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
      const parsedInput = this.parseQuotes(input);
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

  // Function to handle both single and double quotes
  private parseQuotes(input: string): string {
    input = this.parseSingleQuotes(input);

    input = this.parseDoubleQuotes(input);

    return input;
  }

  // Function to handle single quotes and preserve content
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

  // Function to handle double quotes and expand variables
  private parseDoubleQuotes(input: string): string {
    let inDoubleQuote = false;
    let result = '';
    let currentPart = '';
    let expandedInput = input;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (char === '"' && !inDoubleQuote) {
        inDoubleQuote = true;
        continue;
      } else if (char === '"' && inDoubleQuote) {
        inDoubleQuote = false;
        continue;
      } else {
        if (inDoubleQuote) {
          currentPart += char;
        } else {
          result += char;
        }
      }
    }

    result += currentPart;

    // Now, perform variable expansion (e.g., $HOME => home directory)
    expandedInput = result.replace(
      /\$([A-Za-z_][A-Za-z0-9_]*)/g,
      (match, variable) => {
        return process.env[variable] || match;
      },
    );

    return expandedInput;
  }
}

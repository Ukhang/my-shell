import { BuiltinCommand } from './BuiltinCommand';

export class Echo extends BuiltinCommand {
  execute(args: string[]): void {
    console.log(args.join(' '));
  }
}

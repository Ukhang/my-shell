import { BuiltinCommand } from './BuiltinCommand';
import path from 'path';

export class Pwd extends BuiltinCommand {
  execute(): void {
    console.log(path.resolve(process.cwd()));
  }
}

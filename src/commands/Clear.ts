import { BuiltinCommand } from "./BuiltinCommand";

export class Clear extends BuiltinCommand {
  execute(args: string[]) {
    process.stdout.write("\x1Bc");
  }
}
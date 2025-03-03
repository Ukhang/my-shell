export abstract class BuiltinCommand {
  abstract execute(args: string[]): void | Promise<void>;
}

import { BuiltinCommand } from "./BuiltinCommand";

export class Exit extends BuiltinCommand {
    execute(): void {
        console.log("Exiting shell...");
        process.exit(0);
    }
}
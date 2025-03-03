import readline from "readline";

export class Shell {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    start() {
        
    }

    private prompt() {
        process.stdout.write("my-shell$ ");
    }
}
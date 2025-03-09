import { BuiltinCommand } from './BuiltinCommand';
import fs from 'fs/promises';
import path from 'path';

export class Cp extends BuiltinCommand {
  async execute(args: string[]): Promise<void> {
    if (args.length < 2) {
      console.log('Usage: cp <source> <destination>');
      return;
    }

    const sourcePath = path.resolve(args[0]);
    const destinationPath = path.resolve(args[1]);

    try {
      const stat = await fs.stat(sourcePath);

      if (stat.isDirectory()) {
        await this.copyDirectory(sourcePath, destinationPath);
        console.log(`Directory copied: ${sourcePath} -> ${destinationPath}`);
      } else {
        await fs.copyFile(sourcePath, destinationPath);
        console.log(`File copied: ${sourcePath} -> ${destinationPath}`);
      }
    } catch (error) {
      console.error(`Error copying: ${error}`);
    }
  }

  private async copyDirectory(
    source: string,
    destination: string,
  ): Promise<void> {
    await fs.mkdir(destination, { recursive: true });
    const entries = await fs.readdir(source, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(source, entry.name);
      const destPath = path.join(destination, entry.name);

      if (entry.isDirectory()) {
        await this.copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }
}

# My Shell

This is a custom shell built in TypeScript that mimics a command-line interface. It supports various built-in commands and allows users to navigate and interact with the filesystem efficiently.

## architecture diagram
![image 1](https://github.com/user-attachments/assets/568448c2-391b-41ee-8edd-fcf7621f0b12)

## Features

- **exit** - Terminates the shell session.
- **echo [text]** - Prints the given text to the terminal.
- **pwd** - Displays the current working directory.
- **cd [directory]** - Changes the current directory to the specified path.
- **ls** - Lists the contents of the current directory.
- **touch [filename]** - Creates a new empty file with the given name.
- **cat [filename]** - Displays the contents of a file.
- **clear** - Clears the terminal screen.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Ukhang/my-shell.git
   cd my-shell
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the shell:
   ```sh
   npm run my-shell
   ```

## Usage

```sh
my-shell$ pwd
/home/user/my-shell
my-shell$ echo Hello, World!
Hello, World!
my-shell$ cd ..
Changed directory to /home/user
my-shell$ exit
Exiting shell...
```

## License

This project is licensed under the MIT License.

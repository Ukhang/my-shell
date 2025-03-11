![terminal](https://github.com/user-attachments/assets/d57c7985-d734-4c21-9fac-659e656e0e00)

# My Shell

This is a custom shell built in TypeScript that mimics a command-line interface. It supports various built-in commands and allows users to navigate and interact with the filesystem efficiently.

## Features

### Core Features

- ✅ **exit** - Terminates the shell session.
- ✅ **echo [text]** - Prints the given text to the terminal.
- ✅ **pwd** - Displays the current working directory.
- ✅ **cd [directory]** - Changes the current directory to the specified path.
- ✅ **ls** - Lists the contents of the current directory.
- ✅ **touch [filename]** - Creates a new empty file with the given name.
- ✅ **cat [filename]** - Displays the contents of a file.
- ✅ **clear** - Clears the terminal screen.

### Navigation & File Management

- ✅ **mkdir [directory]** - Creates a new directory.
- ✅ **rmdir [directory]** - Removes an empty directory.
- ✅ **rm [filename]** - Deletes a file.
- ✅ **cp [source] [destination]** - Copies a file or directory.
- ✅ **mv [source] [destination]** - Moves or renames a file or directory.

### Process Management

- ✅ **ps** - Lists running processes.
- ✅ **kill [PID]** - Terminates a process.
- ✅ **jobs** - Lists background jobs.
- ✅ **fg [job ID]** - Brings a background job to the foreground.
- ✅ **bg [job ID]** - Resumes a stopped job in the background.

### Networking

- ✅ **ping [host]** - Pings a host to check connectivity.
- ✅ **curl [URL]** - Fetches content from a URL.

### Permissions

- ✅ **chmod [permissions] [file]** - Changes file permissions.
- ✅ **chown [owner] [file]** - Changes file ownership.

### 🖋️ Quoting
- ✅ **Single Quotes ('')** - Preserves literal value of all characters.
- ✅ **Double Quotes ("")** - Allows variable expansion (echo "$HOME").
- ✅ **Backslash () Outside Quotes** - Escapes special characters.

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

## architecture diagram

![image 1](https://github.com/user-attachments/assets/568448c2-391b-41ee-8edd-fcf7621f0b12)

## License

This project is licensed under the MIT License.

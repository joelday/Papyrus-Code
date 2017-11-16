# Welcome to your VS Code Extension

## What's in the folder
* This folder contains all of the files necessary for your extension.
* `./package.json` - this is the manifest file in which you declare your extension and command.
The sample plugin registers a command and defines its title and command name. With this information
VS Code can show the command in the command palette. It doesn’t yet need to load the plugin.
* `./syntaxes/` - this directory contains syntax contributions.
* `./snippets/` - this directory contains snippet contributions.
* `./client/package.json`
* `./client/test/`
* `./client/src/extension.ts` - this is the main file where you will provide the implementation of your command.
The file exports one function, `activate`, which is called the very first time your extension is
activated (in this case by executing the command). Inside the `activate` function we call `registerCommand`.
We pass the function containing the implementation of the command as the second parameter to `registerCommand`.
* `./server/package.json`
* `./server/src/server.ts`

## Get up and running straight away
* Press `F5` to open a new window with your extension loaded.
* Run your command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Hello World`.
* Set breakpoints in your code inside `./client/src/extension.ts` to debug your extension.
* Find output from your extension in the debug console.

## Make changes
* You can relaunch the extension from the debug toolbar after changing code in `./client/src/extension.ts`.
* You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.

## Explore the API
* You can open the full set of our API when you open the file `node_modules/vscode/vscode.d.ts`.

## Testing
* Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown pick `Launch Tests`.
* Press `F5` to run the tests in a new window with your extension loaded.
* See the output of the test result in the debug console.
* Make changes to `./client/test/extension.test.ts` or create new test files inside the `test` folder.
    * By convention, the test runner will only consider files matching the name pattern `**.test.ts`.
    * You can create folders inside the `test` folder to structure your tests any way you want.

## Publishing
See the VS Code [documentation](https://code.visualstudio.com/docs/extensions/publish-extension) on publishing extensions.
This extension is not currently published to the marketplace.
There may be an issue where VS Code does not [support dependencies for VSIX extensions](https://github.com/Microsoft/vscode/issues/15477) which are not installed from the marketplace.

### Publish VSIX
* `npm install -g vsce` to install Microsoft's extension publishing tool.
* `vsce package` to create a vsix extension.
* Install the created vsix extension into the VS Code extension manager. See [Install from a VSIX](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix)

# LSP - Language Server Protocol
Based on Microsoft's LSP source example on [Github](https://github.com/Microsoft/vscode-extension-samples/tree/master/lsp-sample).

This folder contains a sample VS code extension that demonstrates an extension that runs a language server.
The extension observes all 'plaintext' documents (documents from all editors not associated with a language)
and uses the server to provide validation and completion proposals.

The code for the extension is in the 'client' folder.
It uses the 'vscode-languageclient' node module to launch the language server.

The language server is located in the 'server' folder.

## Run Locally
* `npm install` to initialize the extension and the server
* `npm run compile` to compile the extension and the server
* open this folder in VS Code. In the Debug viewlet, run 'Launch Client' from drop-down to launch the extension and attach to the extension.
* create a file `test.txt`, and type `typescript`. You should see a validation error.
* to debug the server use the 'Attach to Server' launch config.
* set breakpoints in the client or the server.
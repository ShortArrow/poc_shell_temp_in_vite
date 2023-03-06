import * as vscode from 'vscode';
import textdata from "../assets/test.txt?raw";
import shelltemp from "../assets/shell.ps1?raw";

export function activate(context: vscode.ExtensionContext) {

  console.log('Congratulations, your extension "poc-shell-temp-in-vite" is now active!');

  let disposable0 = vscode.commands.registerCommand('poc-shell-temp-in-vite.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from poc_shell_temp_in_vite!');
  });

  let disposable1 = vscode.commands.registerCommand('poc-shell-temp-in-vite.loadText', () => {
    console.log(textdata);
    vscode.window.showInformationMessage(textdata);
  });

  let disposable2 = vscode.commands.registerCommand('poc-shell-temp-in-vite.fromMod', () => {
    console.log(shelltemp);
    vscode.window.showInformationMessage(shelltemp);
  });

  context.subscriptions.push(disposable0,disposable1,disposable2);
}

export function deactivate() { }
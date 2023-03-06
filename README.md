# PoC shell_temp_in_vite

This is PoC that it can load shell file as raw text string from shell file.

## How to Debug

1. Open this directory with vscode
1. Open terminal and run `yarn`
1. Start debugging by F5 key

## How to build `*.vsix` file

```bash
git clone https://github.com/ShortArrow/poc_shell_temp_in_vite.git
cd poc_shell_temp_in_vite
yarn
yarn run build
vsce package
```
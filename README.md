store-screens
=============

help generating play/app store screenshots for various target device

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/store-screens.svg)](https://npmjs.org/package/store-screens)
[![Downloads/week](https://img.shields.io/npm/dw/store-screens.svg)](https://npmjs.org/package/store-screens)
[![License](https://img.shields.io/npm/l/store-screens.svg)](https://github.com/alwex/store-screens/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g store-screens
$ store-screens COMMAND
running command...
$ store-screens (-v|--version|version)
store-screens/1.1.0 darwin-x64 node-v12.16.1
$ store-screens --help [COMMAND]
USAGE
  $ store-screens COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`store-screens generate`](#store-screens-generate)
* [`store-screens help [COMMAND]`](#store-screens-help-command)

## `store-screens generate`

generate ios and android screenshot variants for all screen in current folder

```
USAGE
  $ store-screens generate

EXAMPLE
  $ store-screens generate
```

_See code: [src/commands/generate.ts](https://github.com/alwex/store-screens/blob/v1.1.0/src/commands/generate.ts)_

## `store-screens help [COMMAND]`

display help for store-screens

```
USAGE
  $ store-screens help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->

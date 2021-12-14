# TypeScript

Scaffolding TypeScript projects

## Install

### Basic dev env

```bash
npm i --save-dev @solid/eslint-config-base @tsconfig/node12 @types/jest @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier jest jest-circus prettier ts-jest typescript
```

### Additional RDF dependencies

```bash
npm i --save-dev @rdfjs/types @types/n3 n3
```

## GitHub CI

Actions to audit and test on push to main and publish on release creation.

## VSCode

It's quite handy to install the [Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest). To properly use, setup the "Jest Command Line": `npm test --` in VSCode's Jest settings.

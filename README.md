# spur-on

## React Native Client Set Up and Development
### First time
1. This project uses the React Native CLI. See [Getting Started with React Native CLI](https://reactnative.dev/docs/environment-setup). Follow instructions under the "React Native CLI Quickstart" tab until you're able to successfully run `npx react-native init AwesomeProject` under [Creating a new application](https://reactnative.dev/docs/environment-setup#creating-a-new-application)
2. Go to the `spurOnApp` directory and install the package dependencies
```
path/to/spur-on > cd spurOnApp
path/to/spur-on/spurOnApp > yarn install
```

### Running the application
These instructions are for iOS development. See [Getting Started with React Native CLI](https://reactnative.dev/docs/environment-setup) for how to do android development.

1. Start Metro - this is basically starting a server that watches your changes to the repository and bundles it into javascript file for the app to run
```
spur-on/spurOnApp > npx react-native start
```
2. Start the actual iOS app
```
spur-on/spurOnApp > npx react-native run-ios
```

### Adding packages
To add packages, run `yarn add <package>` in `spur-on/spurOnApp` (**not** in `spur-on/`)

### Debugging
Sometimes when making changes, the react native server doesn't get all your changes, especially when adding new packages. In this situation, you'll see an error message in the emulator. In this case, try the following fix:
1. `Ctrl-C` in the terminal that you have `npx react-native start` running in to stop the server
2. In `spur-on/spurOnApp`, run `npx pod-install ios`
3. Now start the server again with `npx react-native run-ios`

## Repo Set Up
Here are some tools to standardize and make development easier.
### Pre-commit hook
Installing this will make it so that running `git commit ...` will run some syntax and styling checks on the staged changes and notify you of any errors.
```
path/to/spur-on > pre-commit install
```

### Useful VS Code extensions
- Code Spell Checker
- Color Highlight
- ES7+ React/Redux/React-Native snippets
  - This enables [keyboard shortcuts](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md) to create boilerplate code when creating a `.tsx/.ts` file.
  - Particularly useful for this project are `rnfe, rnfes, exd`
- GitLens - Git supercharged
- Highlight Matching Tag
- Prettier - Code formatter
  - See [How to use Prettier in VS Code](https://scottsauber.com/2017/06/10/prettier-format-on-save-never-worry-about-formatting-javascript-again/) for how to enable formatting on save in VS Code. Note that the repo already has a `.prettierrc.js` file, so you don't need to write your own `.prettierrc` file.

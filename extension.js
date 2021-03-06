const vscode = require("vscode");
const ccarc = require("create-component-app").default;
const defaultConfig = {
  type: "class",
  jsExtension: "js",
  cssExtension: "css",
  includeTests: false,
  includeStories: false,
  indexFile: false,
  connected: false,
  componentMethods: []
};

/**
 * Get the config options from settings preference and merge with the default options.
 * @param {string} path of destination.
 */
function getConfig(path) {
  return new Promise((resolve, reject) => {
    const { ccarc } = vscode.workspace.getConfiguration();

    vscode.window.showInputBox({ value: "ComponentName" }).then(name => {
      if (!name) {
        reject("Name is undefined");
      }
      const config = Object.assign({ path, name }, defaultConfig, ccarc);
      resolve(config);
    });
  });
}

/**
 * Get the config and create the components base on config
 * @param {object} event from vscode.commands.registerCommand
 */
function createComponent(e) {
  const path = e.toJSON().fsPath;
  getConfig(path).then(
    config => {
      if (config.type === "custom") {
        ccarc.generateFilesFromCustom(config);
      }

      ccarc.generateFiles(config);
    },
    error => {
      vscode.window.showErrorMessage(error);
    }
  );
}

// this method is called when your extension is activated
function activate(context) {
  try {
    const disposable = vscode.commands.registerCommand(
      "extension.create-component-app",
      createComponent
    );

    context.subscriptions.push(disposable);
  } catch (error) {
    console.log(error);
  }
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;

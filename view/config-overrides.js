module.exports = (config, env) => {
    config.resolve.alias["vscode"] = require.resolve(
        "monaco-languageclient/lib/vscode-compatibility"
    );
    return config;
};

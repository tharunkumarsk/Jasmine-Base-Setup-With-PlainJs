module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jasmine",
    transpilers: [],
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    jasmineConfigFile: "spec/support/jasmine.json"
  });
};

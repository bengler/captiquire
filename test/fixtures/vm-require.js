#!/usr/bin/env node
var vm = require("vm");
var Module = require("../../captiquire");

var sandbox = {}; // This will be the global object exposed to all modules

var main = new Module('main', null, sandbox); // This is the root module

// Provide a controlled console.log for modules
sandbox.console = {
  log: function(msg) {
    console.log('SANDBOXED LOG:', msg);
  }
};

//sandbox.console.log.constructor = undefined;

// Start off by loading the module
main.load('./index.js');

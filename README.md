```
                        _             _             
                    _  (_)           (_)            
  ____ _____ ____ _| |_ _  ____ _   _ _  ____ _____ 
 / ___|____ |  _ (_   _) |/ _  | | | | |/ ___) ___ |
( (___/ ___ | |_| || |_| | |_| | |_| | | |   | ____|
 \____)_____|  __/  \__)_|\__  |____/|_|_|   |_____)
            |_|              |_|                    
  Insecure controlled module loader for untrusted code
```

# This is work in progress

# Features
  - Insecure (yes, it's currently a feature, beware!)
  - Will not require native extensions
  - Will not require stdlib modules (like fs and http) by default

# Usage

``` javascript
var vm = require("vm");

var Module = require("./captiquire");

var sandbox = {}; // This will be the global object exposed to all modules

var rootPath = Module._resolveFilename("./"); // This is the main module root path
var root = new Module(rootPath, null, sandbox); // This is the root module

// Provide a controlled console.log for modules
sandbox.console = {
  log: function(msg) {
    console.log('SANDBOXED LOG:', msg);
  }
};
// Define the require function for the sandbox
sandbox.require = function() {
  root.require.apply(root, arguments);
};
// Run require of root module in a new v8 execution context
vm.runInNewContext('require("./")', sandbox, rootPath);
```

# Disclaimer
This is not secure. There are numerous ways to break out of the sandbox and run code in the parent context.
It is as simple as grabbing a reference to the constructor of a function defined in the outside context, pass it some
code, and voila, execute code in the unsecure context:

```js
console.log.constructor('console.log(process.mainModule.require("fs"))')();
```

See this discussion for more info:
https://groups.google.com/group/nodejs/browse_thread/thread/3fe8148d1ba7d849/c638ef95322a5e83

# Credits

By all and large, this is just a downstripped version of the builtin Node.js module loader. All credits goes to 
smart people at Joyent.
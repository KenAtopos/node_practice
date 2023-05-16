// console.log(arguments);
// console.log(require("module").wrapper);

// module.export
const Cal = require("./test-module-1");
const calc1 = new Cal();
console.log(calc1.add(5, 2));

// exports
// const calc2 = require("./test-module-2");
const { add, multiply } = require("./test-module-2");
console.log(add(2, 6));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

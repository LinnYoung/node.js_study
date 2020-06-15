const util = require("util");

function fn() {
  return Promise.reject(null);
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  // 当Promise 被以 ’null' 拒绝是， 它被包装为Error并且原始值存储 ‘reason' 中
  if (err && err.hasOwnProperty("reason") && err.reason === null) {
    console.log("true ???");
  } else {
      console.log('false...')
  }
});

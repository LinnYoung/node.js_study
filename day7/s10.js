/**
 * util.isDate(object)
如果给定的参数 "object" 是一个日期返回true，否则返回false
 */

const util = require("util");
const { createCipher } = require("crypto");

console.log(util.isDate(new Date())); // true

console.log(util.isDate(Date())); // false

console.log(util.isDate({})); // false


// 下节： node.js 文件系统

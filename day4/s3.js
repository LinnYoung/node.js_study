/**
 *     链式流
 *  链式流是通过连接输出流到另一个流并创建多个流操作链的机制。链式流一般用于管道操作
 * 用管道和链式来压缩和解压文件
 */

 const fs = require('fs')
 const zlib = require('zlib')

 // 压缩input.txt文件input.txt.gz
// const readerStream =  fs.createReadStream('input.txt')
// readerStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))

//解压
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip()).pipe(fs.createWriteStream("11.txt"))

console.log('执行完毕')

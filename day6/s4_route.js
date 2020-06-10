// /**
//  * 我们要为路由提供请求URL 和其他需要的GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码
//  */

// const http = require("http");
// const url = require("url");

// function start(){
//     function onRequest(request, response){
//         const pathName = url.parse(require.url).pathname;

//         response.writeHead(200,{'Content-Type': "text/plain"});
//         response.write("Hello World");
//         response.end()
//     }

//     http.createServer(onRequest).listen(8888);
//     console.log('Server has started.')
// }

// exports.start = start

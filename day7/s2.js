/**
 * process 是一个全局变量，即 global 对象的属性
 *
 *  exit --当进程准备退出时触发
 *  beforeExit --当node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时node 退出，但是‘boforeExit' 的监听器可以一步调用，这样 node 就会继续执行
 *
 *  uncaughtException --当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出） 就不会发生
 *
 * Signal事件 -- 当进程接收到信号时就触发。
 */

process.on("exit", (code) => {
  // 一下代码永远不会执行
  setTimeout(() => {
    console.log("该代码不会执行");
  }, 0);
  console.log('退出码为： ',code)
});

console.log("程序执行结束")

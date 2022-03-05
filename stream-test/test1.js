// 1.标准输入输出
// process.stdin.pipe(process.stdout)

// 2. 了解pipe 可以用postman发送POST请求查看响应内容
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST'){
//         req.pipe(res)
//     }
// })
// server.listen(8888)

// 3.通过stream 读写文件 拷贝文件
// let fs = require("fs");
// let path = require("path");

// // 两个文件名
// let fileName1 = path.resolve(__dirname, "data.txt");
// let fileName2 = path.resolve(__dirname, "data-back.txt");
// // 读取文件的 stream 对象
// let readStream = fs.createReadStream(fileName1);
// // 写入文件的 stream 对象
// let writeStream = fs.createWriteStream(fileName2);
// // 执行拷贝，通过pipe
// readStream.pipe(writeStream);
// // 数据读取完成， 即拷贝完成
// readStream.on("end", function () {
//   console.log("拷贝完成");
// });

// 4. 创建读取流 通过管道将数据请求到 数据会一点一点流 效率高， 采用GET
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let method = req.method;
  if (method === "GET") {
    let fileName = path.resolve(__dirname, "data.txt");
    let stream = fs.createReadStream(fileName);
    stream.pipe(res);
  }
});
server.listen(8888);

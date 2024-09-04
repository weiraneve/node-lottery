const express = require('express');
const app = express();

// 解析 JSON 数据
app.use(express.json());

// 简单的 GET 路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const redis = require("redis");
// 레디스 클라이언트
const client = redis.createClient({
  host: "redis-server",
  post: 6379,
});

const app = express();

// 리프레시마다 카운트 증가
client.set("num", 0);

app.get("/", (req, res) => {
  client.get("num", (err, num) => {
    // 숫자 가져오고 +1
    client.set("num", parseInt(num) + 1);
    res.send("숫자에 +1: " + num);
  });
});

app.listen(8080);
console.log("running");

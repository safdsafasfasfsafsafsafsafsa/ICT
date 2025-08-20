const express = require("express");
const redis = require("redis");
// 레디스 클라이언트
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
  legacyMode: true,
});

const app = express();

async function run() {
  try {
    await client.connect();

    // 리프레시마다 카운트 증가
    await client.set("num", 0);

    app.get("/", async (req, res) => {
      try {
        const num = await client.get("num");
        await client.set("num", parseInt(num) + 1);
        res.send("숫자에 +1: " + num);
      } catch (err) {
        console.error("Redis get/set 오류:", err);
        res.status(500).send("Redis 작업 중 오류가 발생했습니다.");
      }
    });

    app.listen(8080);
    console.log("running");
  } catch (err) {
    console.error("Redis 연결 또는 명령 실행 오류:", err);
  }
}

run();

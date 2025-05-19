for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("yes 3");
    continue; // 처음으로
  }
  if (i === 5) {
    console.log("break 5");
    break;
  }
  console.log(`number ${i}`);
}

const user = {
  name: "han",
  province: "경기",
  city: "성남",
};
for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

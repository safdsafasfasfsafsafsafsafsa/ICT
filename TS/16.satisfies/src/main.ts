type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

// const palette = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   blue: [0, 0, 255],
// };
// const palette: Record<Colors, string | RGB> = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   blue: [0, 0, 255],
// };
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

const redComponent = palette.red.at(0); // 배열의 n번째 요소 리턴
const greenNormalized = palette.green.toUpperCase(); // string | RGB 형식이라 기존 메소드 불가 -> satisfies로 유연하게.

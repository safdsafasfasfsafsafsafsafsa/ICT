class Car {
  mile = 0;
  price = 100;
  color = "white";

  drive() {
    return "drive";
  }
  break() {
    return "break";
  }
}

interface Part {
  seats: number;
  tire: number;
}

// 지켜야 할 형태만 전달
class Ford1 implements Car, Part {
  mile = 0;
  price = 200;
  color = "black";
  seats = 1;
  tire = 2;

  drive() {
    return "drive";
  }
  break() {
    return "break";
  }
}

class Ford extends Car {} // 부모 클래스에서 상속

const myFord = new Ford();

// interface: extends 확장, 중복 선언으로 확장 가능
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: Boolean;
}

const bear1: Bear = {
  name: "asdf",
  honey: true,
};

// type: &(intersection) 확장
type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  honey: Boolean;
};

const bear2: Bear = {
  name: "asdf",
  honey: true,
};

// 모두 implements, 유니언 가능

// partial: 속성 일부만 가져오기
interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: "adsf" };
const all: Address = { email: "sdg", address: "sdgsdg" };

// pick: 선택한 속성만 새로 정의
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "adfs",
  completed: false,
};

// omit: 특정 속성만 제거
type TodoPreview2 = Omit<Todo, "description">;

// exclude: 유니언 전달한 뒤, 2번째 인수에서 제거할 멤버 지정

// required: 속성 일부가 필수가 아닐 때 -> 객체 만들 때 저거 붙이면 모든 속성을 반드시 요구
type User = {
  first: string;
  last?: string; // 물음표: 필수 아님
};

let user1: User = {
  first: "afsd",
};
let user2: Required<User> = {
  first: "dasf",
  last: "sdgd",
};

// record<keys, type>: 속성 키, 속성 값 따로 합친 객체 타입 구성. -> 타입의 속성을 다른 타입에 매핑하기
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "a" | "b" | "c";

const cats: Record<CatName, CatInfo> = {
  a: { age: 10, breed: "asddasg" },
  b: { age: 5, breed: "sg" },
  c: { age: 7, breed: "sdgs" },
};

// ReturnType<func>: 함수의 반환 타입으로 구성된 타입
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "hello"; // string

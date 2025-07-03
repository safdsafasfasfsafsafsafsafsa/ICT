interface Person {
  name: string;
  age: number;
  address: string;
}

const person: Person = {
  name: "horb",
  age: 49,
  address: "sadf",
};

const age = getProperty(person, "age");
const fg = getProperty(person, "name");
// const invalid = getProperty(person, "adgdag"); // error

// 프로퍼티를 추출하는 함수?
// function getProperty<T>(obj: T, key: string){
//   return obj[key]
// }
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

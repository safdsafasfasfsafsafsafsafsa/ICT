interface IUser {
  name: string;
  age: number;
  address: string;
}

// 타입의 키 추출해 새 유니언 타입 만들기
type UserKeys = keyof IUser; // "name" | "age" | "address"

const user = {
  name: "adfsf",
  age: 20,
  address: "adsf",
};

type UserKeys1 = keyof typeof user; // "name" | "age" | "address"

enum UserRole {
  admin,
  manager,
}

type UserRoleKeys = keyof typeof UserRole; // "admin" | "manager"

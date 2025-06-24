// 호출 시그니처: 타입 재사용
interface getLikeNumber {
  (like: number): number;
}

interface Post {
  id: number;
  title: string;
  // getLikeNumber: (like: number) => number;  // 여기서 설정한 타입을 재사용하려면?
  getLikeNumber: getLikeNumber;
}

const post1: Post = {
  id: 1,
  title: "post1",
  getLikeNumber(like: number) {
    return like;
  },
};

post1.getLikeNumber(1);

// ---------------------------------------------

// 인덱스 시그니처: 가능한 값의 타입 미리 지정
// 객체 ~
interface Post2 {
  [key: string]: unknown; // 새로 무슨 값이 추가될지 모르니까 unknown으로 준비
  id: number;
  title: string; // 확실히 아는 값은 그냥 작성
}

const post2: Post2 = {
  id: 1,
  title: "post2",
};

post2["description"] = "asfs";
post2["pages"] = 300; // 새로 추가되는 값들

// 배열 ~
interface Names {
  [item: number]: string;
}

const names: Names = ["aaa", "bbb", "ccc"];

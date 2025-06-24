// 접근 제어자: 생성자 속성에도 따로 타입 지정해야
// public, portected, private
class Post {
  public id: number;
  public title: string;
  constructor(id: number, title: string) {
    (this.id = id), (this.title = title);
  }

  getPost() {
    return `id ${this.id}, title ${this.title}`;
  }
}

const post: Post = new Post(1, "post1");

// 축약시키기
class Post2 {
  constructor(private id: number = 0, protected title: string = "") {}
}

// 각종 메소드

import type { IListItem } from "./ListItem";
import ListItem from "./ListItem";

interface IList {
  list: IListItem[];
  load(): void; // IListItem 데이터 가져오는 함수, 리턴 없으면 void
  save(): void;
  clearList(): void;
  addItem(itemObj: IListItem): void;
  removeItem(id: string): void;
}

export default class List implements IList {
  // 인스턴스 하나만 만들기(싱클톤)
  static instance = new List();

  private constructor(private _list: IListItem[] = []) {}

  get list(): IListItem[] {
    return this._list;
  }

  // 로컬스토리지 사용
  load(): void {
    const storedList: string | null = localStorage.getItem("myList");

    if (typeof storedList !== "string") return;
    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    // listItem 인스턴스 객체 생성 -> list 인스턴스 객체에 넣기
    parsedList.forEach((itemObj) => {
      // listItem에서 정보 받아오기
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );

      // static에 접근
      List.instance.addItem(newListItem);
    });
  }

  save(): void {
    // str 형식으로 변환해 저장
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: IListItem): void {
    this._list.push(itemObj);
    this.save(); // 변경 후 저장
  }

  removeItem(id: string): void {
    // filter로 삭제 행동: id 순회하면서 나머지만 새 배열로 이동
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}

// 저장한 todo의 text 데이터

export interface IListItem {
  id: string;
  item: string;
  checked: boolean;
}

// 3가지 속성 강제, 외부에서 배열식으로 호출됨
export default class ListItem implements IListItem {
  // 클래스 내부에서만 사용 알리는 언더바
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  //   id 정보 가져가기
  get id(): string {
    return this._id;
  }
  //   id 정보 갱신하기
  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }
  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
  }
}

import List from "./models/List";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const listInstance = List.instance;
  const listTemplateInstance = ListTemplate.instance;

  // 초기 데이터 로드
  listInstance.load();
  listTemplateInstance.render(listInstance);

  // 추가 이벤트
  const itemForm = document.getElementById("form") as HTMLFormElement;

  itemForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault(); // 새로고침 방지

    // 새 item의 텍스트와 id 가져오기
    const inputEl = document.getElementById("item-input") as HTMLInputElement;
    const newText = inputEl.value.trim(); // 공백 제거
    if (!newText.length) return; // 텍스트 유무 검사
    inputEl.value = ""; // 인풋에 작성한거 지우기

    const itemId = listInstance.list.length
      ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1 // 가장 최신 id의 다음거 만들기
      : 1;

    const newItem = new ListItem(itemId.toString(), newText); // _checked 기본 false라 굳이 안 적어도

    // 새 데이터 생성
    listInstance.addItem(newItem);
    listTemplateInstance.render(listInstance);
  });

  // 클리어 명령 시 전부 지우기: clearList()
  const clearItemsEl = document.getElementById(
    "clear-items-btn"
  ) as HTMLButtonElement;

  clearItemsEl.addEventListener("click", () => {
    listInstance.clearList();
    listTemplateInstance.clear();
  });

  listInstance.load();
  listTemplateInstance.render(listInstance);
};

initApp();

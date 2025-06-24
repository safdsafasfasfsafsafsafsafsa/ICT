const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader; // 헤더 여부: header 클래스의 유무 결정
    this.disabled = disabled; // 수정 가능 여부
    this.data = data; // 데이터
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active; // focus 준 셀의 행/열 헤더에 active 클래스 부여 -> 스타일 변경
  }
}

// csv 생성 템플릿
exportBtn.onclick = function (e) {
  let csv = "";
  for (let i = 0; i < spreadsheet.length; i++) {
    if (i === 0) continue;
    csv +=
      spreadsheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(",") + "\r\n";
  }
  console.log(csv);

  const csvObj = new Blob([csv]);
  console.log(csvObj);

  const csvUrl = URL.createObjectURL(csvObj);
  console.log(csvUrl);

  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "spreadsheet name.csv";
  a.click();
};

initSpreadsheet();

// 배열 생성
function initSpreadsheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];

    for (let j = 0; j < COLS; j++) {
      let cellData = ""; // 동적: 기본은 비어있고 헤더에 투입하기 위해
      let isHeader = false;
      let disabled = false;

      if (j === 0) {
        cellData = i;
        isHeader = true;
        disabled = true;
      }
      if (i === 0) {
        cellData = alphabets[j - 1];
        isHeader = true;
        disabled = true;
      }
      if (!cellData) {
        cellData = ""; // undefined 지우기
      }

      let cell = new Cell(
        isHeader,
        disabled,
        cellData,
        i,
        j,
        i,
        alphabets[j - 1],
        false
      );

      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  makeSheet();
  console.log(spreadsheet);
}

// 동적으로 셀 1개 생성
function createCellEl(cell) {
  // input 조작에 맞는 객체 속성을 만들어야.
  const cellEl = document.createElement("input");
  cellEl.classList.add("cell");
  cellEl.id = "cell_" + cell.row + cell.column; // id를 행렬값 받아 동적 생산, 나중에 변수 이용해 추적 가능
  cellEl.value = cell.data;
  if (cell.isHeader) {
    cellEl.classList.add("header"); // 선택한 셀만 header 클래스 추가
  }

  // 셀 클릭 시 헤더에 하이라이트 전달
  cellEl.onclick = () => handleClickCell(cell);
  // input 변경 시 data에 전달
  cellEl.onchange = (e) => handleUpdateCell(e.target, cell);

  return cellEl;
}

// 셀 클릭 시 헤더에 하이라이트 전달
function handleClickCell(cell) {
  // 초기화
  clearHeaderActiveStates();

  const rowHeader = spreadsheet[cell.row][0];
  const columnHeader = spreadsheet[0][cell.column];
  // id 번호를 변수로 추적
  const rowHeaderEl = document.querySelector(
    "#cell_" + rowHeader.row + rowHeader.column
  );
  const columnHeaderEl = document.querySelector(
    "#cell_" + columnHeader.row + columnHeader.column
  );
  rowHeaderEl.classList.add("active");
  columnHeaderEl.classList.add("active");

  document.querySelector("#cell-status").innerHTML =
    cell.rowName + "-" + cell.columnName;
}

// 초기화: 새 클릭 시 헤더 순회해 기존 active 지우기
function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

// input 변경 시 data에 전달
function handleUpdateCell(target, cell) {
  cell.data = target.value;
}

// 스프레드시트 html 만들고 배열 객체 삽입
function makeSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const cellRowEl = document.createElement("div");
    cellRowEl.classList.add("cell-row");

    for (let j = 0; j < spreadsheet[i].length; j++) {
      const newCellEl = createCellEl(spreadsheet[i][j]);
      cellRowEl.append(newCellEl);
    }
    spreadSheetContainer.append(cellRowEl);
  }
}

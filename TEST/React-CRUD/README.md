# React CRUD TEST

![img](./Honeycam%202025-08-17%2014-58-48.webp)

# components

Toast: 추가, 수정, 삭제 이벤트에 토스트 메시지 추가

Tasks, Task: 수정 여부와 List의 타겟 id 필요

Lists, List: 저장소에서 리스트 불러오기, Tasks로 수정 요청

# contexts

EditContext: 수정 여부를 List -> Task 전달

IdContext: 수정 시 선택한 List의 id를 호출해 저장소에서 todo, spending 찾은 뒤 Task의 input으로 전달

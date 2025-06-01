class Participant {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
    this.messages = [];
  }

  send(message, to) {
    this.chatRoom.send(message, this, to); // 누구에게 보낼건지
  }

  receive(message, from) {
    this.messages.push({ message, from }); // 누가 보냈는지
  }

  showMessages() {
    console.log(`${this.name}`, this.messages);
  }
}

class ChatRoom {
  constructor() {
    this.participants = {}; // 참가자 리스트
  }

  enter(participant) {
    this.participants[participant.name] = participant; // Participant 객체를 참가자 리스트에 추가
    participant.chatRoom = this; // 참가자의 null이었던 chatRoom에 'ChatRoom 인스턴스' 할당
  }

  send(message, participant, to) {
    this.participants[to.name].receive(message, participant);
  }
}

// 인스턴스 만들고 호출
const chatRoom = new ChatRoom();

const user1 = new Participant("user1");
const user2 = new Participant("user2");
const user3 = new Participant("user3");

chatRoom.enter(user1);
chatRoom.enter(user2);
chatRoom.enter(user3);

console.log("chatroom", chatRoom);
console.log("user1", user1);

// 챗룸을 경유해 메시지 전달
user1.send("Hello", user2);
user2.send("Nice meet to you", user1);
user3.send("Boring....", user1);

user1.showMessages();
user2.showMessages();
user3.showMessages();

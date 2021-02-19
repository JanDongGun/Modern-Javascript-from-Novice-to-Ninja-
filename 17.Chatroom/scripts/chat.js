// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }

  async addChat(message) {
    //format a caht object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };

    const response = await this.chats.add(chat);
    return response;
  }

  // save the chat documents
}

const chatroom = new Chatroom("gamming", "gon");
chatroom
  .addChat("hello everyone")
  .then(() => console.log("chat added"))
  .catch((err) => console.log(err));

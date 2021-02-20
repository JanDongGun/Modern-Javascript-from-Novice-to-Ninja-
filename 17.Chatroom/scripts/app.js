// DOM queries
const chatList = document.querySelector(".chat-list");
const newChat = document.querySelector(".new-chat");

// add a new chat
newChat.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChat.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChat.reset();
    })
    .catch((err) => console.log(err));
});

// class instances
const chatroom = new Chatroom("general", "gon");
const chatUI = new ChatUI(chatList);
// get chats and render
chatroom.getChats((data) => {
  chatUI.render(data);
});

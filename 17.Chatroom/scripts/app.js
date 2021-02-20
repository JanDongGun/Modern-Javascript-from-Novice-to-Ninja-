// DOM queries
const chatList = document.querySelector(".chat-list");

// class instances
const chatroom = new Chatroom("general", "gon");
const chatUI = new ChatUI(chatList);
// get chats and render
chatroom.getChats((data) => {
  chatUI.render(data);
});

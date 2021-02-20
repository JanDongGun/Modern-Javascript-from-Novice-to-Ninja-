// DOM queries
const chatList = document.querySelector(".chat-list");
const newChat = document.querySelector(".new-chat");
const newName = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");
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

// update username
newName.addEventListener("submit", (e) => {
  e.preventDefault();
  // update name via chatroom
  const name = newName.name.value.trim();
  chatroom.updateName(name);
  // reset the from
  newName.reset();
  // show then hide the update message
  updateMssg.innerText = `Your name was updated to ${name}`;
  setTimeout(() => {
    updateMssg.innerText = "";
  }, 2000);
});

// check local storage
const username = localStorage.username ? localStorage.username : "anon";
// class instances
const chatroom = new Chatroom("general", username);
const chatUI = new ChatUI(chatList);
// get chats and render
chatroom.getChats((data) => {
  chatUI.render(data);
});

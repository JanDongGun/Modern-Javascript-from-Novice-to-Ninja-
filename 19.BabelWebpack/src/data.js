const users = [
  { name: "mario", premium: true },
  { name: "luigi", premium: false },
  { name: "yoshi", premium: false },
  { name: "toad", premium: true },
  { name: "peach", premium: false },
];

users.forEach((user) => {
  console.log(user.name);
});

export default users;

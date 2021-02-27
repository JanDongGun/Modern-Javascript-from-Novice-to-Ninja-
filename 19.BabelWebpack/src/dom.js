console.log("dom file");

const body = document.querySelector("body");

const styleBody = () => {
  body.style.background = "peachpuff";
  body.style.color = "red";
};

const addTitle = (text) => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

export { styleBody, addTitle };

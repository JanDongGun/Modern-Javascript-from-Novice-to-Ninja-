const list = document.querySelector("ul");
const form = document.querySelector("form");
const addRecipe = (recipe) => {
  let time = recipe.createdAt.toDate();
  let html = `
        <li>
            <div>${recipe.title}</div>
            <div>${time}</div>
        </li>
    `;

  list.innerHTML += html;
};

db.collection("recipes")
  .get()
  .then((snapshot) => {
    // when we have the data
    snapshot.docs.forEach((doc) => {
      addRecipe(doc.data());
    });
  })
  .catch((err) => console.log(err));

// add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();

  const recipe = {
    title: form.recipe.value,
    createdAt: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => console.log("recipe added"))
    .catch((err) => console.log(err));
});

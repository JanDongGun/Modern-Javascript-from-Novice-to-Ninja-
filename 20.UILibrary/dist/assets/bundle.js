(() => {
  "use strict";
  console.log("dom file");
  var e = document.querySelector("body"),
    o = [
      { name: "mario", premium: !0 },
      { name: "luigi", premium: !1 },
      { name: "yoshi", premium: !1 },
      { name: "toad", premium: !0 },
      { name: "peach", premium: !1 },
    ];
  o.forEach(function (e) {
    console.log(e.name);
  });
  const n = o;
  var l;
  console.log("index file"),
    ((l = document.createElement("h1")).textContent = "test"),
    e.appendChild(l),
    (e.style.background = "peachpuff"),
    (e.style.color = "red"),
    console.log("gon"),
    console.log(n),
    console.log("hello gon");
})();

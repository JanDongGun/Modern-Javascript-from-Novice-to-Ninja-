import "./styles/tabs.css";
class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContents(e);
      });
    });
  }

  toggleTabs(e) {
    this.tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    e.target.classList.add("active");
  }

  toggleContents(e) {
    const contents = document.querySelectorAll(".content");
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const tab = e.target.getAttribute("data-target");
    const contentTab = this.container.querySelector(tab);
    contentTab.classList.add("active");
  }
}

export { Tabs as default };

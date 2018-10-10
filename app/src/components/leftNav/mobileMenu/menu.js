import Box from "./box";

class Menu {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.items = Array.from(
      this.DOM.el.querySelectorAll(".mobile-menu__item")
    );
    this.itemsTotal = this.DOM.items.length;
    this.boxes = [];
    this.DOM.items.forEach((item, pos) => {
      this.boxes.push(new Box(item, pos));
    });

    this.initEvents();
  }
  initEvents() {
    for (let i = 0; i < this.itemsTotal; ++i) {
      const link = this.boxes[i].DOM.link;
      // if (link) {
      //   link.addEventListener("click", ev => {
      //     ev.preventDefault();
      //     if (this.isAnimating) return;
      //     document
      //       .querySelector(".content--switch-current")
      //       .classList.remove("content--switch-current");
      //     document
      //       .querySelector(link.getAttribute("href"))
      //       .classList.add("content--switch-current");
      //     this.close();
      //   });
      // }
    }
  }

  open() {
    this.toggle("open");
  }

  close() {
    this.toggle("close");
  }

  toggle(action) {
    if (this.isAnimating) {
      console.log("this.isAnimating", this.isAnimating);
      return;
    }
    console.log("this is not Animating", this.isAnimating);
    console.log(action);
    this.isAnimating = true;
    if (action === "open") {
      this.openBoxes();
    } else {
      this.closeBoxes();
    }
  }

  openBoxes(pos = 0) {
    this.toggleBoxes("open", pos);
  }

  closeBoxes(pos = 0) {
    console.log(pos);
    this.toggleBoxes("close", pos);
  }

  toggleBoxes(action, pos) {
    if (pos >= this.itemsTotal) {
      this.isAnimating = false;
      return;
    }

    this.DOM.el.classList[action === "open" ? "add" : "remove"](
      "mobile-menu--open"
    );
    console.log(this.DOM.el.classList);
    const box = this.boxes[pos];
    box[action === "open" ? "open" : "close"]().then(() =>
      this[action === "open" ? "openBoxes" : "closeBoxes"](pos + 1)
    );
  }
}

export default Menu;

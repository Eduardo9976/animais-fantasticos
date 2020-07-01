import initOutsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) {
      this.events = ['click', 'touchstart'];
    } else {
      this.events = events;
    }

    this.activeClass = 'active';
    //callback
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);
    initOutsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuevents() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu, { passive: false });
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuevents();
    }
    return this;
  }
}

(function(window) {
  "use-strict";

  class Element {
    constructor(selector) {
      this.$element =
        selector instanceof Element //$(this)
          ? selector.$element
          : window.document.querySelector(selector);
    }

    click(fn) {
      this.$element.addEventListener("click", _ => fn.call(this));
      return this;
    }
    addClass(className) {
      this.$element.classList.add(className);
      return this;
    }
    removeClass(className) {
      this.$element.classList.remove(className);
      return this;
    }
    hide() {
      this.$element.style.display = "none";
      return this;
    }
    show() {
      this.$element.style.display = "block";
      return this;
    }
    attr(...args) {
      if (args.length === 2) {
        let name = args[0];
        let value = args[1];
        this.$element.setAttribute(name, value);
      } else if (args.length === 1) {
        let name = args[0];
        return this.$element.getAttribute(name);
      } else {
        throw new Error("No arguement provided for method attr()");
      }
      return this;
    }
    val() {}
    append(content) {
      this.$element.append(content);
      return this;
    }
    html(content) {
      this.$element.innerHTML = content;
      return this;
    }
  }
  let jQuery = selector =>
    selector instanceof HTMLParagraphElement ||
    selector instanceof HTMLDivElement
      ? selector
      : new Element(selector);

  window.$ = jQuery;
})(window);

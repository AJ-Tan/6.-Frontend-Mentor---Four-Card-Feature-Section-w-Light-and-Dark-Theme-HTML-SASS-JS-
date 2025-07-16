const themeButton = document.querySelector(".theme-button");
const themeBeforeButton = document.querySelector(".theme-button__toggle-knob");

//Builder Pattern
class SetTheme {
   #theme = localStorage.getItem("theme") ?? "light";

   toggleTheme() {
      //So that there wont be any transition on my toggle knob upon refresh!
      themeBeforeButton.style.transition = "0.3s";

      this.#theme = this.#theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.#theme);
      return this;
   }

   applyTheme() {
      document.documentElement.dataset.theme = this.#theme;
      themeButton.dataset.theme = this.#theme;
      return this;
   }
}

//initially applying the theme
new SetTheme().applyTheme();

themeButton.addEventListener("click", () => {
   new SetTheme()
      .toggleTheme()
      .applyTheme();
})
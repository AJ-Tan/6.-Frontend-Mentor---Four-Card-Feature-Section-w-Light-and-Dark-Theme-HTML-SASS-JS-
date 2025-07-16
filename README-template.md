# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the site depending on their device's screen size

### Screenshot

![Desktop Design Light Mode](<screenshot/AJ - Desktop Design Light Mode.png>)
![Desktop Design Dark Mode](<screenshot/AJ - Desktop Design Dark Mode.png>)
![Mobile Design Light Mode](<screenshot/AJ - Mobile Design Light Mode.png>)
![Mobile Design Dark Mode](<screenshot/AJ - Mobile Design Dark Mode.png>)

### Links

-  Solution URL: [Add solution URL here](https://your-solution-url.com)
-  Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  CSS (SASS/SCSS)
-  Flexbox
-  Mobile-first workflow
-  Javascript

### What I learned

-  Learned to make a mixin to standardize my media query sizes.

```scss
$breakpoint-list: (
   "tablet": 51.2rem,
   "desktop": 68.26rem,
);

@mixin breakpoint($size) {
   @media screen and (min-width: map-get($breakpoint-list, $size)) {
      @content;
   }
}

.card-section {
   @include u.breakpoint("tablet") {
      flex-wrap: wrap;
      max-height: 40em;
   }

   @include u.breakpoint("desktop") {
      & article:first-child {
         margin-block: var(--spacing-xl);
      }
   }
}
```

-  Looping through a SASS variable to populate my ruleset!

```scss
$colorList: "cyan", "red", "orange", "blue";

@each $color in $colorList {
   &--#{$color} {
      @extend .card;

      &::before {
         border-top: 0.3rem solid var(--#{$color});
      }
   }
}
```

-  Light and dark mode function. I made the toggle function using the builder pattern concept!

```css
[data-theme="dark"] {
   --color-bg: hsl(234, 12%, 10%);
   --color-text-1: hsl(0, 0%, 90%);
   --color-text-2: hsl(0, 0%, 70%);
   --color-shadow: rgba(0, 0, 0, 0.5);
}
```

```js
const themeButton = document.querySelector(".theme-button");
const themeBeforeButton = document.querySelector(".theme-button__toggle-knob");

//Builder Pattern
class SetTheme {
   #theme = localStorage.getItem("theme") ?? "light";

   toggleTheme() {
      //So that there wont be any transition on my toggle knob upon refresh
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
   new SetTheme().toggleTheme().applyTheme();
});
```

### Useful resources

-  [@each](https://sass-lang.com/documentation/at-rules/control/each/) - My reference for looping in SASS using @each.

-  [@mixin](https://sass-lang.com/documentation/values/mixins/) - My reference when making my mixin function in SASS.

-  [Programming Pattern](https://www.youtube.com/watch?v=BJatgOiiht4&t=94s) - Where I got the builder pattern concept to make my Light and Dark theme toggle function.

## Author

-  GitHub - [AJ-Tan](https://github.com/AJ-Tan)
-  Frontend Mentor - [@AJ-Tan](https://www.frontendmentor.io/profile/AJ-Tan)

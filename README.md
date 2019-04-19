# Bk2-Ch12_DynamicCards

## Challenge: Dynamic Cards

> The learning objective for this challenge is to practice event listeners for click events. You will also practice adding elements to the DOM, and removing elements from the DOM with the `removeChild()` method. You will even need to use the `split()` method on a string.

### Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

```bash
mkdir -p ~/workspace/exercises/javascript/cards && cd $_
touch index.html
touch cards.js
touch cards.css
```

### Requirements

1. Create an HTML page that contains a text area and a button labeled *Create*.
1. When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.
1. Insert that new component into the DOM.
1. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.

> **Pro tip:** The card's `id` attribute, and the button's `id` attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the `split()` method on a string? That will be helpful.


## Challenge: Drag & Drop

> The learning objective of this challenge is to examine existing code that allows users to drag & drop elements around the screen, and use an `if` condition to prevent the drop from happening when a condition is true. Challenges will require you to practice your Googling skills. There are a couple technical keywords in the requirements below that you can use to find some information on the Web.

Open this [simple drag & drop JSFiddle project](https://jsfiddle.net/chortlehoort/1oo127p1/) and copy all of the code into a local project in your `workspace` directory.

The user should be able to drag one of the middle cards into either the top box, or the bottom box. However, there's a problem with the way the code currently works. There's also a couple changes you need to make.

1. If you drag one of the cards into the top/bottom box, and then drag another card into the first one, you get a nested card. You need to prevent this from happening.
1. The user should only be able to drag one card into either box. Use the `childNodes` property to ensure that, if a card is already in the box, another can't be added.
1. The user should be able to move a card from the top/bottom box back to the middle.

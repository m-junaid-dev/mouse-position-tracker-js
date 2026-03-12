# Mouse Position Tracker

This is a small JavaScript project that tracks the mouse position inside an element.

The project uses `getBoundingClientRect()` to calculate the exact position of the mouse relative to the element.

##  Features

- Tracks mouse movement inside a box
- Calculates mouse position relative to the element
- Uses `getBoundingClientRect()` for accurate coordinates
- Simple and beginner-friendly JavaScript example

##  How It Works

1. Select the element from the DOM.
2. Listen for the `mousemove` event.
3. Get the element's position using `getBoundingClientRect()`.
4. Subtract the element's left position from the mouse X coordinate.

Example:

```javascript
let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    var RectLocation = rect.getBoundingClientRect();
    console.log(details.clientX - RectLocation.left);
});

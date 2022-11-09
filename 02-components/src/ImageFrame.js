// In React, components are basically reusable JSX
// 1. A component is a function
// 2. The first letter is Upper Case
// 3. returns JSX
// To use a component, we write it out as if it is a HTML element
function ImageFrame() {
    return <img src={require("./apple.jpg")} />
}

export default ImageFrame;
  
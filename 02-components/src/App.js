
import React from 'react'
import ImageFrame from './ImageFrame'
import ImageFrame2 from "./ImageFrame2"
import DisplayMessage from "./DisplayMessage"
import BorderedImageFrame from './BorderedImageFrame';
import SumOfTwo from './SumOfTwo';
import TwoBoxesComponents from './components/TwoBoxes';

// Just as functions have parameters, so can components recieve parameters as well
function calculateAreaOfCircle(radius) {
  return 22/7 * (radius ** 2);
}





// return JSX elements from a function is a way to reuse JSX
function displayHeader() {
  // JSX are like values. They are basically objects that disguised to look like HTML elements
  return <h1>Hello Folks</h1>
}

function App() {
  let greetings = "Happy Upcoming Christmas!"
  return (
    <React.Fragment>
      {/* Create a new instance of the DisplayMessage component and set its props to custom values */}
      <DisplayMessage message="The quick brown fox jumps over the lazy dog"
         fontSize={42}
         color="green"/>

      <DisplayMessage message="She sells seashells at the seashore"
        fontSize={12}
        color="blue"/>

      {displayHeader()}
      <h2>Today is Wedensday</h2>
      <ImageFrame />
      <div>
        {/* We can place any JavaScript expression in { } as long as it evaluates to a value */}
        {greetings}
        <ImageFrame />
        <BorderedImageFrame />
        <ImageFrame2 imageURL="cherry.jpg"/>
        <SumOfTwo n1={3} n2={2}/>
      </div>
    </React.Fragment>
  );
}

export default App;


import NumberBox from "./NumberBox";
import NumberBoxCounter from "./NumberBoxCounter";
import Dice from "./Dice"
import ColoredDiceIfElse from "./ColoredDiceIfElse";
import ColoredDiceReturnDiffJSX from "./ColoredDiceReturnDiffJSX";
import ColoredDiceUsingFunc from "./ColoredDiceUsingFunc";
import ColoredDiceUsingTernary from "./ColoredDiceUsingTernary";
function App() {
  return (
    <div>
      <NumberBox/>
      <NumberBox/>
      <NumberBoxCounter/>
      <br/><br/>
      <Dice/>
      <ColoredDiceIfElse/>
      <ColoredDiceReturnDiffJSX/>
      <ColoredDiceUsingFunc/>
      <ColoredDiceUsingTernary/>
    </div>
  );
}

export default App;

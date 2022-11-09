import MessageBox from "./MessageBox";
import NumberBox from "./NumberBox";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <NumberBox/>
      <NumberBox/>
      <MessageBox/>

      {/* Props are set by other component instances
          We understand props as being external to the component instance
          A component cannot change its own props (props are read-only) after it has been set
     */}
      <Counter initialValue={105}/>
    </div>
  );
}

export default App;

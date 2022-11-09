export default function TwoBoxes() {
    // JSX must only have one root (i.e top level) element
    return <React.Fragment>
      <div style={{
        display: "inline-style"
      }}>A</div>
      <div style={{ display: "inline-style" }}>B</div>
    </React.Fragment>
  }
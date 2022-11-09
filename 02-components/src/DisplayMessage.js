// Components can recieve parameters -- those are known as "props" (or properties for short)
// the first parameter of a Component function will be the props objects
export default function DisplayMessage(props){
    console.log("props =", props);
    return <div style={{color:props.color, fontSize:props.fontSize}}>{props.message}</div>
  }

  
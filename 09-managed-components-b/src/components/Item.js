const Item = (props) => {
    return <div className="item-info">
        <h3>Name: {props.item.name}</h3>
        <h4>Price: ${props.item.price}</h4>
        <h4>Sugar: {props.item.sugar}</h4>
        <button onClick={() => {
            props.beginEdit(props.item);
        }}>Edit</button>
        <button onClick={()=>{
            props.delete(props.item)
        }}>Delete</button>
    </div>
}

export default Item;
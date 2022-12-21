import {useState, useEffect, Fragment} from 'react'
import axios from 'axios'

export default function SpecificPost() {

    const [activePostId, setActivePostId] = useState(0);
    const [activePost, setActivePost] = useState({});
    
    // watch the activePostId such that when it changes,
    // call the effect function (i.e the first parameter to useEffect)
    useEffect(function(){
        console.log("Current activePostId=", activePostId);
        const fetchPost = async() => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/" + activePostId)
            setActivePost(response.data);
        }
        fetchPost();
    },[activePostId])

    return <Fragment>
        <div>
             <input type="text" value={activePostId} onChange={e=>setActivePostId(e.target.value)}/>
        </div>
        <div>
            <textarea value={activePost.title}></textarea>
        </div>
    
    </Fragment>
}
import React, {useEffect, useState} from 'react';
import axios from 'axios'

export default function Posts(){

    const [posts, setPosts] = useState([]);

    // eqv. of ComponentDidMount
    // the first parameter of useEffect is a function (aka effect)
    // the second parameter is what to watch
    // if the second parameter is an empty array, then the function
    // will trigger automatically
    useEffect(function(){
        // since the effect function cannot be async
        // we create a function that is async to get all the posts with axios
        const fetchPosts = async() => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
            setPosts(response.data);
        }

        // call the function that will get all the posts
        fetchPosts();

    }, []);

    return <React.Fragment>
        <h1>Posts</h1>
        <ul>
            {
                posts.map(p => <li>{p.title}</li>)
            }
        </ul>
    </React.Fragment>
}
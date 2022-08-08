import React, {useState, useEffect} from 'react';
import axios from 'axios';


function DataFetching(){

    const[post, setPost] = useState({})
    const[id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(0)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)

        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
            setPost("error")
        })
    }, [idFromButtonClick])

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />

            <button type="button" onClick={handleClick} >Fetch Post</button>

            <div> {post.title} </div>


            {/* <ul>
                { post.map(post => (
                    <li key={post.id} >{post.name}</li>
                ))}
            </ul> */}


        </div>
    )
}

export default DataFetching
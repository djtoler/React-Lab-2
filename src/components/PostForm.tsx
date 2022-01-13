import React, { FormEvent, useState } from 'react';
import Post from '../models/post';
import {postArray} from "./SocialPosts"



interface Props { 
    onSubmit: (post:Post) => void;
}
function PostForm({onSubmit}: Props) {
    const [thoughtClicked, setThoughtClicked] = useState(false)
    const [title, setTitle] = useState("")
    const [thought, setThought] = useState("")

    function SubmitHandler(e:FormEvent) {
        e.preventDefault()
        onSubmit({title:title, thought:thought})
        // line 19&20  along with the form attribute values is called 2 way binding
        setTitle("")
        setThought("")
        return postArray
    }

    return(
        <div className="WholeDiv">
                { thoughtClicked ? 
                    <div className="Form" >
                        <form onSubmit={SubmitHandler} action="">
                            <label> 
                                Title
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title}/>
                            </label>
                            <label>
                                Thought
                                <textarea onChange={(e) => setThought(e.target.value)}name="thought" value={thought} > </textarea> 
                            </label>
                            <button>Add A Post</button>
                        </form>
                    </div> 
                    : <button onClick={() => setThoughtClicked(true)}>New Thought</button>
                }
        </div>
       
        

    )
}

export default PostForm
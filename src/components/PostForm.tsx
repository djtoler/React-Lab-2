import React, { FormEvent, useState } from 'react';
import Post from '../models/post';
import './PostForm.css'



interface Props { 
    onSubmit: (post:Post) => void;
    close: Boolean;
    onClose: () => void;
}
function PostForm({onSubmit, onClose}: Props) {

    
    const [thoughtClicked, setThoughtClicked] = useState(false)
    const [title, setTitle] = useState("")
    const [thought, setThought] = useState("")

    function SubmitHandler(e:FormEvent) {
        e.preventDefault()
        let newPost: Post = {title:title, thought:thought}
        onSubmit(newPost)
        // onSubmit({title:title, thought:thought})
        // line 19&20  along with the form attribute values is called 2 way binding
        setTitle("")
        setThought("")
        setThoughtClicked(false)
    }

    return(
        <div>
                { thoughtClicked ? 
                    <div className={"Form animate__animated animate__backInUp "}>
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
                    <button onClick={onClose}> Close</button>
                </div>  
                    : <div> <button onClick={() => setThoughtClicked(true)}>New Thought</button> </div> 
                }

        </div>
       
        

    )
}

export default PostForm



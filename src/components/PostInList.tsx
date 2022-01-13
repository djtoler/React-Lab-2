import PostForm  from "./PostForm"
import Post from "../models/post"
import React, { useState } from 'react';
import SocialPosts from "./SocialPosts"
import {postArray} from "./SocialPosts"


interface Props {
    post:Post
    onDelete?: () => void
}

function PostInList({post}:Props) {
    // const [remove, setRemove] = useState(false)
    const [title, setTitle] = useState("")
    const [thought, setThought] = useState("")
    const [post, setPost] =
    //  post = postArray.map((post) => <div>{post.title}{post.thought}</div>)
    setThought(prev => [])


    function OnDelete(post:Post) {
        // postArray.splice(post)
    }
    return( 
        <div>
            <ul>

            </ul>
            <div>
                <button>Trash</button>
            </div>
        </div>
    )
}

export default PostInList
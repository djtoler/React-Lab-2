import PostForm  from "./PostForm"
import Post from "../models/post"
import React, { useState } from 'react';
import SocialPosts from "./SocialPosts"
import {postArray} from "./SocialPosts"


interface Props {
    post:Post
    onDelete?: () => void
}
// {post}:Props
function PostInList() {
    // const [remove, setRemove] = useState(false)
    const [addposts, setPostArray] = useState(postArray)

    function OnDelete(post:Post) {
        // postArray.splice(post)
    }
    return( 
        <div>
            <ul>
                {postArray.map((post) => 
                    <div>{post.title}{post.thought}</div>
                )}

            </ul>
            <div>
                <button>Trash</button>
            </div>
        </div>
    )
}

export default PostInList
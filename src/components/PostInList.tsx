import PostForm  from "./PostForm"
import Post from "../models/post"
import React, { useState } from 'react';
import SocialPosts from "./SocialPosts"
import {postArray} from "./SocialPosts"


interface Props {
    post:Post[]
    onDelete?: () => void
}

function PostInList(  {post}:Props   ) {
console.log("hi");

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
import PostForm  from "./PostForm"
import Post from "../models/post"
import React, { useState } from 'react';
import SocialPosts from "./SocialPosts"



interface Props {
    post:Post
    onDelete?: () => void
}

function PostInList(  {post, onDelete}:Props   ) {


    return( 
        <div>
            <div className="animate__animated animate__slideInUp">
                <div className="PostDiv" >
                    {post.title} --- {post.thought}
                    <button className="fa fa-trash-o" onClick={onDelete}></button>
                </div>
            </div>
        </div>
    )
}

export default PostInList
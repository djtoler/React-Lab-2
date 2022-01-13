// import Post from './models/post'
import { useState } from 'react'

import PostInList from "./PostInList"
import PostForm  from "./PostForm"
import Post from '../models/post'
import { title } from 'process'



export const postArray: Post[] = [
    {title: "happy today", thought: "i am so happy today"},
    {title: "excited today", thought: "i am so excited today"}
]
function SocialPosts() {
    


    function OnSubmit(newPost:Post) {
        postArray.push(newPost)
        console.log(postArray);
        console.log( "newPost = " + newPost.thought);
        console.log( "newPost = " + newPost.title);

        
        
        
        // return newPost
        
        
    }

    return(
        <div>
            <h1>My Thoughts</h1>
            <PostForm onSubmit={OnSubmit}/>
            <PostInList post={postArray} />
        </div>
    )
        

}

export default SocialPosts
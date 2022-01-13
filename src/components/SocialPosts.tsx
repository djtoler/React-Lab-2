// import Post from './models/post'
import { useState } from 'react'

import PostInList from "./PostInList"
import PostForm  from "./PostForm"
import Post from '../models/post'


export const postArray: Post[] = [
    {title: "happy today", thought: "i am so happy today"},
    {title: "excited today", thought: "i am so excited today"}
]
function SocialPosts() {
    


    function OnSubmit(post:Post) {
        
        postArray.push(post)
        console.log(postArray);

        console.log( "newPost = " + post);

        
        
        
        return postArray
        
        
    }

    return(
        <div>
            <h1>My Thoughts</h1>
            <PostForm onSubmit={OnSubmit}/>
            <PostInList post={{title, thought}} />
        </div>
    )
        

}

export default SocialPosts
// import Post from './models/post'
import { useState } from 'react'
import './SocialPosts.css'
import PostInList from "./PostInList"
import PostForm  from "./PostForm"
import Post from '../models/post'
import { title } from 'process'



// export const postArray: Post[] = [
//     {title: "happy today", thought: "i am so happy today"},
//     {title: "excited today", thought: "i am so excited today"}
// ]


function SocialPosts() {

    const [isClosed, setIsClosed] = useState<Boolean>(true)

    const [postArray, setPostArray] = useState([
        {title: "happy today", thought: "i am so happy today"},
        {title: "excited today", thought: "i am so excited today"
    }])
   

    function OnSubmit(newPost:Post) {
        setPostArray((prev)=>[...prev, newPost])
        console.log(postArray);
        
    }

    function onClose() {
        console.log("hello");
        setThoughtClicked(false)
    }

    const deleteHandler = (index: number) => {
        setPostArray(prev => {
            const newPosts = prev.slice(0);
            newPosts.splice (index, 1);
            return newPosts;
        })
    }

    return(
        <div>
            <h1>My Thoughts</h1>
            <PostForm 
            onSubmit={OnSubmit}
            onClose={onClose}
            close={isClosed}/>
            {postArray.map((post, i) => 
            <PostInList onDelete={() => 
            deleteHandler(i)} key={i} post={post}/>)}
        </div>
    )
        

}

export default SocialPosts
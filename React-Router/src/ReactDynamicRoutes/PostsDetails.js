


import { useParams } from "react-router-dom"
import { useContext } from "react";
import { postcontex } from "../Contex/PostsContex";



export default function PostsDetails ({title , body}){
  
    const {postId} = useParams();
    const posts = useContext(postcontex);
    const post = posts.find((p)=>{
        return p.id === Number(postId)
    })
    console.log(post);
    console.log(post.paragraph);
    return (
        <div style={{margin:"100px"}}>
            <h1 style={{ margin : "20px", fontFamily :"fantasy" , wordSpacing :"10px" , fontWeight :"100"}}>THIS IS THE DETAILS ABOUT <span style={{color:"green"}}>{post.title}</span> </h1> 
            <hr></hr>
            <h2 style={{color :"brown"}}>{post.title}</h2>

            {post.title === "HARRY POTTER" && (
          <img src="/harry.jpg" alt="harrypotterpicture" width="300" />
           )}
           {post.title === "MARVEL SERIES" && (
          <img src="/marvel.jpg" alt="marvel" width="300" />
           )}
           {post.title === "BACK TO THE FUTURE" && (
          <img src="/backto.jpg" alt="backtothefuture" width="300" />
           )}
           
               <br></br>
            <span style={{fontWeight :"600" }}>{post.paragraph}</span>
        </div>
    )
}
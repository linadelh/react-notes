
import { Link } from "react-router-dom"
import { postcontex } from "../Contex/PostsContex" 
import { useContext } from "react"

export default function Posts (){

    const posts = useContext(postcontex) ;

    let postsList = posts.map((post)=>{
        return (
         <Link to={`/PostsDetails/${post.id}`} key= {post.id}>
            <div style={{backgroundColor : "pink" , margin :"10px" , padding :"10px"}}>
                <h1>{post.title}</h1>
            </div>
        </Link>
        )
    })
    return (
        <div style={{ margin : "100px" , textAlign :"center"}}>
        
        {postsList}
        
        
        </div>  
    )
}
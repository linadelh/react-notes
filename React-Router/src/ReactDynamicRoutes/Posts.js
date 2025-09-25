
import { Link } from "react-router-dom"


let posts = [
    {
        id : 1 ,
        title : "HARRY POTTER" ,
        paragraph : "fantasy movie kskssksksksks" 
    },
    {
        id : 2 ,
        title : "MARVEL SERIES" ,
        paragraph : "fantasy movie kskssksksksks " 
    },
    {
        id : 3 ,
        title : "BACK TO THE FUTURE" ,
        paragraph : "SCIENCE FICTION movie kskssksksksks" 
    }

]

export default function Posts (){

    let postsList = posts.map((post)=>{
        return (
         <Link to="/PostsDetails">
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
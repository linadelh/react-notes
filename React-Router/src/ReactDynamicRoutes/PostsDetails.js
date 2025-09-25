






export default function PostsDetails ({title , body}){
    return (
        <div>
            <h1 style={{ margin : "20px", fontFamily :"fantasy" , wordSpacing :"10px" , fontWeight :"100"}}>THIS IS THE DETAILS ABOUT IT </h1> 
            <hr></hr>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

import { Children } from "react"
import Button from "./button" 


export default function rightsection (){

    const listbutton = [
      { id:1 , content :  "VERY GOOD MAN" , Children : <img src="/download (2).jpg" alt="" width={"90px"} style={{borderRadius: "20px"}} /> } , 
      { id : 2 , content : "wow amazing " , Children : <img src="/download (1).jpg" alt="" width={"60px"} style={{borderRadius: "20px"}} />},
      {id:3 , content : "slaay"}
    ]

     const btn = listbutton.map((el)=>{
      return (
            <Button  content = {el.content} key={el.id}> 
               <br></br>
               {el.Children}
            </Button>
      )
     })


    return (
    <div className="rightsection">
         {btn}
    </div>

    )
}
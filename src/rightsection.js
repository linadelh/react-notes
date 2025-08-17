
import { Children } from "react"
import Button from "./button" 


export default function rightsection (){

    const listbutton = [
      {content :  "VERY GOOD MAN" , Children : <img src="/download (2).jpg" alt="" width={"90px"} style={{borderRadius: "20px"}} /> } , 
      {content : "wow amazing " , Children : <img src="/download (1).jpg" alt="" width={"60px"} style={{borderRadius: "20px"}} />},
      {content : "slaay"}
    ]

     const btn = listbutton.map((el)=>{
      return (
            <Button  content = {el.content}> 
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
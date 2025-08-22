
import { useState } from "react"

export default function MyForm (){

    const [Inputs , setInputs] = useState({name :"" , age :"" , email:"" })
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <lable>Name</lable>
            <input value={Inputs.name} onChange={(e)=>{
                setInputs({...Inputs , name : e.target.value})
            }}/>
            <hr></hr>

             <lable>age</lable>
            <input value={Inputs.age}  onChange={(e)=>{
                setInputs({...Inputs , age : e.target.value})
            }}/> 
            <hr></hr>

             <lable>Email</lable>
            <input value={Inputs.email}  onChange={(e)=>{
                setInputs({...Inputs , email : e.target.value})
            }}/> 
            <hr></hr>

        </form>
    )
}
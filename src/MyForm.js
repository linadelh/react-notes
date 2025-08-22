
import { useState } from "react"

export default function MyForm (){

    const [Inputs , setInputs] = useState({name :"" , age :"" , email:"" , generalinfo:"" , isstudent : false })
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

            <label>general info</label>
            <textarea onChange={
                (e)=> {
                    setInputs({...Inputs , generalinfo : e.target.value})
                }
            }></textarea>

            <hr></hr>
            <label>are you a student </label>
            <input type="checkbox" checked = {Inputs.isstudent} onChange={(e)=>{
                if(Inputs.isstudent === false ){
                setInputs({...Inputs , isstudent : true})
                }else {
                     setInputs({...Inputs , isstudent : false})
                }
            }}/>





        </form>




        
    )
}
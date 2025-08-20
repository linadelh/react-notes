

import { useState } from "react" 


export default function MyInput (){
    const [input , setinput] = useState("");
    
        function inputupload (e){
            setinput(e.target.value);
        }
    return (
        
        <div>
            <label>name</label>
            <input placeholder="enter your name" value={input} onChange={inputupload}>
            
            </input>
        </div>


    )
}

import { useState } from "react";
export default function MyInput(){


   const [Inputvalue , setInputvalue] = useState('');
    function handleinput (e){
        setInputvalue(e.target.value);
    }
    return (
        <div>
            <label>Your Name</label>
            <input
            value={Inputvalue}
            onChange={handleinput
            }
            ></input>
        </div>
    )
}
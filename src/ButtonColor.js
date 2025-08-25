
// BUTTON THAT CHANGES ITS COLOR WHENEVER U CLICK ON 

import { useState } from "react"


export default function ButtonColor (){
   
    const [colorlist] = useState (["red" , "blue" , "orange" , "black" ,"green"])
    const [currentColor , setnewcolor] = useState("blue");
    const [indexofcolor , setindex] = useState(0);
    let index = indexofcolor ; 


    function handlecolorclick (){
        
        if (indexofcolor > colorlist.length - 1  ){
            index = 0 ; 
        }
        setnewcolor(colorlist[index]);
        index++;
        setindex(index);
    }

     console.log(indexofcolor);


return (
    <button id="switch-color" style={{display:"flex" , justifyContent:"center" , margin:"250px auto" , padding:"30px" , cursor:"pointer" , transition:"0.7s" , backgroundColor: currentColor , color:"white"}} onClick={handlecolorclick}>SWITCH COLOR</button>
)
}


import MyInput from "./MyInput";
export default function Component({Inputlabel , value , handle}){
   return (
    <div>
      <h2>THIS IS THE HEADER </h2>
 
      <MyInput Inputlabel={Inputlabel} value={value} handle={handle}/>

      <h2>THIS IS THE FOOTER</h2>
    </div>
   )
}
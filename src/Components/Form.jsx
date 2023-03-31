import "../Components/Form.css"
import { useState } from "react";

const Form=(props)=>{
  const[focused,setFocused]=useState(false)
  const {label ,errorMessage,onChange,id,...inputprops}=props;
  const handleFocus=(e)=>{
    setFocused(true)
  }
  
  return (
    <div className="forminput">
      {/* <label>{label}</label> */}
      <input className="input"{...inputprops} onChange={onChange} onBlur={handleFocus}
      onFocus={()=>
      inputprops.name==="confirmpassword" &&setFocused(true)}
      focused={focused.toString()}/>
      <span className="inputspan">{errorMessage}</span>
    </div>
 
  )
}
export default Form;
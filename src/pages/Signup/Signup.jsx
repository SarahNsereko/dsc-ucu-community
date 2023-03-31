import React from "react";
import Form from '../../Components/Form'
import { useState } from "react";
import './Signup.css'
function Signup() {
  const [values,setValues]=useState({
    Fullname:"",
    Email:"",
    Phone:"",
    Username:"",
    Password:"",
    ConfirmPassword:"",

  })

  const inputs=[{
    id:1,
    name:'fullname',
    type:'text',
    placeholder:'Fullname',
    errorMessage:"Please include a space between names", 
    label:'Fullname',
    required:true,
    pattern:"john", /**include regex code here  */

  },
  {
    id:2,
    name:'email',
    type:'email',
    placeholder:'Email',
    errorMessage:'Please provide a valid email!',
    label:'Email',
    required:true,

  },
  {
    id:3,
    name:'phone',
    type:'text',
    placeholder:'Phone',
    errorMessage:"Please provide a valid phone number!",
    label:'Phone',
    required:true,

  },
  {
    id:4,
    name:'username',
    type:'text',
    placeholder:'Username',
    errorMessage:"Username already in use!",
    label:'Username',
    required:true,

  },
  {
    id:5,
    name:'password',
    type:'password',
    placeholder:'Password',
    errorMessage:"Password must contain a number, special character and uppercase letter or letters!",
    label:'Password',
    required:true,

  },
  {
    id:6,
    name:'confirmpassword',
    type:'password',
    placeholder:'ConfirmPassword',
    errorMessage:"Passwords don't match",
    label:'ConfirmPassword',
    required:true, 

  },
]

  const handleSubmit=(e)=>{
    e.preventDefault(); /*stops page from refreshing*/
  }
  const onChange=(e)=>{/**onChange is a function that is called everytime an input fields value changes, contains event object e which has dta about the event which has happened */
    setValues({...values,[e.target.name]:e.target.value})/** updates the values state object with the new values from any input fields that are changed. */
  }

  console.log(values)
  return (

    <div className="Signup">
        <form className="signupform" onSubmit={handleSubmit}>
             <h1>Sign-up</h1>
              {inputs.map((input)=>(
                <Form key={input.id} {...input} value={values[input.name]} onChange={onChange} />
              ))}
                
            <button className="Submit1">Submit</button>
            </form>
    </div>
   
  );
}

export default Signup

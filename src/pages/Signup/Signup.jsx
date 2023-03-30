import React from "react";
import Form from '../../Components/Form'
import { useState } from "react";
import '../Signup/Signup.css'
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
    label:'Fullname'

  },
  {
    id:2,
    name:'email',
    type:'email',
    placeholder:'Email',
    errorMessage:'Please provide a valid email!',
    label:'Email'

  },
  {
    id:3,
    name:'phone',
    type:'text',
    placeholder:'Phone',
    errorMessage:"Please provide a valid phone number!",
    label:'Phone'

  },
  {
    id:4,
    name:'username',
    type:'text',
    placeholder:'Username',
    errorMessage:"Username already in use!",
    label:'Username'

  },
  {
    id:5,
    name:'password',
    type:'password',
    placeholder:'Password',
    errorMessage:"Password must contain a number, special character and uppercase letter or letters!",
    label:'Password'

  },
  {
    id:6,
    name:'confirmpassword',
    type:'password',
    placeholder:'ConfirmPassword',
    errorMessage:"Passwords don't match",
    label:'ConfirmPassword'

  },
]

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values)
  return (
    <div className="Signupbackground">
    <div className="Signup">
        <form className="signupform" onSubmit={handleSubmit}>
             <h1>Sign-up</h1>
              {inputs.map((input)=>(
                <Form key={input.id}{...input} value={values[input.name]} onChange={onChange}/>
              ))}
                
            <button className="Submit1">Submit</button>
            </form>
    </div>
    </div>
  );
}

export default Signup

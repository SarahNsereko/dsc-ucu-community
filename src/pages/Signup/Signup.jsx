import { useState } from "react";
import "./Signup.css";
import Form from "../../Components/Form";

const Signup= () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      label: "Fullname",
    },
     
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please provide a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      errorMessage: "Please provide a valid number!",
      label: "Phone",
      pattern:"^0[0-9]{9}$",
      required: true,
    }
    ,
    {
      id:4,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should have a capital letter at start and can have atmost 3 numbers in any position!",
      label: "Username",
      pattern:`^([A-Z][a-z]*)(\d*[a-zA-Z]?){0,3}$`,
      required: true,
    },
    
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(values));
    alert("User information saved in local storage!");
  };
  

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup">
      <form  className="signupform" onSubmit={handleSubmit}>
        <h1 className="heading1">Sign-Up</h1>
        {inputs.map((input) => (
          <Form
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="signupbutton">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
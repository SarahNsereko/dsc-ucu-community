import "../Components/Form.css"


const Form=(props)=>{
  const {label ,errorMessage,onChange,id,...inputprops}=props;
  return (
    <div className="forminput">
      <label>{label}</label>
      <input className="input"{...inputprops} onChange={onChange}/>
      <span className="inputspan">{errorMessage}</span>
    </div>
 
  )
}
export default Form;
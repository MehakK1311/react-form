import "./formInput.css";

const FormInput = (props) => {
  return (
    <div>
        {/* <label>{props.label}</label> */}
        <input placeholder={props.placeholder} />
    </div>
  )
}

export default FormInput;
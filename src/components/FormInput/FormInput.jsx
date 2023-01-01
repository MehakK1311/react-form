import "./formInput.css";

const FormInput = (props) => {
  const{label, onChange, id, ...inputProps} = props;
  return (
    <div>
      <label>{label}</label>
      <input className="formInput" {...inputProps} onChange={onChange}/>
    </div>
  );
};

export default FormInput;
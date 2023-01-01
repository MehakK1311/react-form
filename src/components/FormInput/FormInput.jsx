import "./formInput.css";

const FormInput = (props) => {
  const{label, errorMsg, onChange, id, ...inputProps} = props;
  return (
    <div>
      <label>{label}</label>
      <input className="formInput" {...inputProps} onChange={onChange} />
      <span className="error">
        {errorMsg}
      </span>
    </div>
  );
};

export default FormInput;
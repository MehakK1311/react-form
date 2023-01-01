import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const{label, errorMsg, onChange, id, ...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <label>{label}</label>
      <input className="formInput" {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <span className="error">
        {errorMsg}
      </span>
    </div>
  );
};

export default FormInput;
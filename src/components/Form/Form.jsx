import { useState } from "react";
import "./form.css";
import FormInput from "../FormInput/FormInput";
import { WebcamCapture } from "../Webcam/Webcam";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    fullName: "",
    regNo: "",
    contact: "",
    email: "",
    address: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      errorMsg: "Full Name should be more than 3 characters",
      label: "Full Name",
      pattern: "^[A-Za-z]{3,}$",
      required: true,
    },
    {
      id: 2,
      name: "regNo",
      type: "text",
      placeholder: "Registeration Number",
      errorMsg: "Invalid",
      label: "Registeration Number",
      pattern: "^[0-9]{2}[A-Za-z]{3}[0-9]{4}$",
      required: true,
    },
    {
      id: 3,
      name: "contact",
      type: "text",
      placeholder: "Contact Number",
      errorMsg: "invalid",
      label: "Contact Number",
      pattern: "[1-9]{1}[0-9]{9}",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "mail",
      placeholder: "Email Id",
      errorMsg: "NOTE: only VIT mail id accepted",
      label: "Email Id",
      pattern: "^[a-zA-Z0-9.$+-]+@vitstudent\\.ac\\.in$",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "message",
      placeholder: "Address",
      errorMsg: "Address should be more than 20 characters",
      label: "Address",
      pattern: "^{20,}$",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(values));
    navigate("/submit");
  };

  const reset = (e) => {
    e.preventDefault();
    setValues({
      fullName: "",
      regNo: "",
      contact: "",
      email: "",
      address: "",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <WebcamCapture />
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}
        <button>Submit</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  );
}

export default Form;

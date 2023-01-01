import { useState } from "react";
import "./form.css";
import FormInput from "../FormInput/FormInput";

function Form() {
  const [values, setValues] = useState({
    fullName: "",
    appNo: "",
    regNo: "",
    contact: "",
    email: "",
    gender: "",
    blood: "",
    address: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
    },
    {
      id: 2,
      name: "appNo",
      type: "number",
      placeholder: "Application Number",
      label: "Application Number",
    },
    {
      id: 3,
      name: "regNo",
      type: "text",
      placeholder: "Registeration Number",
      label: "Registeration Number",
    },
    {
      id: 4,
      name: "contact",
      type: "text",
      placeholder: "Contact Number",
      label: "Contact Number",
    },
    {
      id: 5,
      name: "email",
      type: "mail",
      placeholder: "Email Id",
      label: "Email Id",
    },
    {
      id: 6,
      name: "gender",
      type: "text",
      placeholder: "Gender",
      label: "Gender",
    },
    {
      id: 7,
      name: "blood",
      type: "text",
      placeholder: "Blood Group",
      label: "Blood Group",
    },
    {
      id: 7,
      name: "address",
      type: "message",
      placeholder: "Address",
      label: "Address",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          return <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />;
        })}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;

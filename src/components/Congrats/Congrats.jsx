import { Link } from "react-router-dom";
import "./congrats.css";

function Congrats() {
  const image = localStorage.getItem("image");
  const data = localStorage.getItem("data");
  const values = JSON.parse(data);

  return (
    <div className="container">
      <div className="msg">
        <h1>CONGRATULATIONS!</h1>
        <p>You have successfully submitted the form.</p>
      </div>
      <div className="button">
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
      <img src={image} alt=" " />
      <div className="data">
        <span className="values">Full Name: {values.fullName}</span>
        <span className="values">Registeration number: {values.regNo}</span>
        <span className="values">Contact Number: {values.contact}</span>
        <span className="values">Email Id: {values.email}</span>
      </div>
    </div>
  );
}

export default Congrats;

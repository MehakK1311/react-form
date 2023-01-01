import "./congrats.css"

function Congrats() {
    const image = localStorage.getItem("image");
    console.log(image);
  return (
    <div className="container">
        <div className="msg">
            <h1>
                CONGRATULATIONS!
            </h1>
            <p>
                You have successfully submitted the form. 
            </p>
        </div>
    </div>
  )
}

export default Congrats
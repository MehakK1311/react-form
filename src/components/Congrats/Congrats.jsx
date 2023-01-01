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
        <div className="button">
            <button>Go Back</button>
        </div>
        <img  src={image}/>
    </div>
  )
}

export default Congrats
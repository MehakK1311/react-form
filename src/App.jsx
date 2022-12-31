import "./app.css";
import FormInput from "./components/FormInput/FormInput"

function App() {
  return (
    <div className="app">
      <FormInput placeholder="Full Name" label="Full Name"/>
      <FormInput placeholder="Application Number" label="Application Number"/>
      <FormInput placeholder="Registeration Number" label="Registeration Number"/>
      <FormInput placeholder="Contact Number" label="Contact Number"/>
      <FormInput placeholder="Email Id" label="Email Id"/>
      <FormInput placeholder="Gender" label="Gender"/>
      <FormInput placeholder="Blood Group" label="Blood Group"/>
      <FormInput placeholder="Address" label="Address"/>
    </div>
  );
}

export default App;

import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Congrats from "./components/Congrats/Congrats";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/submit" element={<Congrats/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

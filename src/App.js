import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";
import MainComp from "./component";
import Contact from "./component/Contact";


function App() {
  return (
    <Router>

      <Routes>
        <Route index element={<MainComp />} />
        <Route path="contactus" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

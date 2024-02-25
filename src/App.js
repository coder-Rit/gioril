import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";
import MainComp from "./component";
import Contact from "./component/Contact";
import Policies from "./component/Policies";


function App() {
  return (
    <Router>

      <Routes>
        <Route index element={<MainComp />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="policy" element={<Policies />} />
      </Routes>
    </Router>
  );
}

export default App;

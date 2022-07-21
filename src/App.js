import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card2";
import Card4 from "./Components/Card4";
import Card5 from "./Components/Card4";
import Form from "./Components/Form";
import Main from "./Components/Main";
//import HomeButton from "./Components/HomeButton"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import "./reset.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Card1 />} />
          <Route path="form" element={<Form />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="main" element={<Main />} />
          <Route path="d1" element={<Card1 />} />
          <Route path="d2" element={<Card2 />} />
          <Route path="d3" element={<Card3 />} />
          <Route path="d4" element={<Card4 />} />
          <Route path="d5" element={<Card5 />} />
        </Routes>
        <div><Footer /></div>
      </Router>
    </div>
  );
}

export default App;

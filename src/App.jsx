import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
// import CourseList from "./CourseList";
// import CourseDetail from "./CourseDetail";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Navbar from "./Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<h1>CourseList</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/course/:id" element={<h1>CourseDetail</h1>} />
    </Routes>
  </Router>
);

export default App;

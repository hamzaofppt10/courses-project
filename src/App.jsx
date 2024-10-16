import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
// import CourseList from "./CourseList";
// import CourseDetail from "./CourseDetail";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Navbar from "./Navbar";
import CourseList from "./courses/CourseList";
import CoursesPage from "./courses/CourseList";

const App = () => (
  
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<CoursesPage  />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/course/:id" element={<h1>CourseDetail</h1>} />
    </Routes>
  </Router>
);

export default App;

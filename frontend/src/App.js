import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./screens/Home";
import Layout from "./Layout";
import About from "./screens/About";
import Blog from "./screens/Blog";
import WorkoutForm from "./screens/WorkoutForm";
import UpdateWorkoutForm from "./components/home/UpdateWorkoutForm";
import ToDoList from "./screens/ToDoList";
import Register from "./screens/auth/Register";
import NotFound from "./screens/NotFound";
import Login from "./screens/auth/Login";
import BlogUpdateForm from "./components/BlogUpdate";

export default function App() {
  // `initiate your aos effect`
  useEffect(() => {
    AOS.init({
      // Global settings
      once: false,
    });
  }, []);
  return (
    <>
      {/* instantiate your browser routing system */}
      <BrowserRouter>
        {/* wrap body within a "Layout" Component */}
        <Layout>
          <Routes>
            {/* Routing pages */}
            
            <Route path="/" element={<Blog />} />
            <Route path="/update/:id" element={<BlogUpdateForm />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

{
  /* <BrowserRouter>
<Routes> */
}

{
  /* <Route path="/*" element={<NotFound />} /> */
}
// </Routes>
// </BrowserRouter>

import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Root from "./Components/Root"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import Resume from "./Components/Resume"
import Footer from "./Components/Footer"
function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<About/>} />
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/resume" element={<Resume/>}/>
  </Route> 
  )
)

  return (
    <>
<RouterProvider router={router} />
<Footer/>
    </>
  )
}

export default App

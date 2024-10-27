import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App =()=>{
  return(
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about-us' element={<About/>} />
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App;

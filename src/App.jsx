import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


const App = () => {
  const [nav , setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <Navbar nav={nav} handleNav={handleNav}  />
      <Home nav={nav} />
    </>
  );
};

export default App;
 
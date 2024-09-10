import React from "react";
import Signup from "./components/Signup";
import Products from "./components/Products";

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>

      {/* <Products /> */}
      <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/Products' element={<Products />} />
        </Routes>
    
    </>
  );
}

export default App;
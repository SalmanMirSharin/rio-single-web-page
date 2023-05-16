import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from '../pages/contact';
import DirectLink from './DirectLink';


const NavLink = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<DirectLink />} /> */}
      <Route path="/" element={<DirectLink />}></Route>

    <Route path="/view-map" element={<Contact />} />

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default NavLink

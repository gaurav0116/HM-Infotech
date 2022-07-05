import React from 'react';
import {Routes, Route} from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Service from '../pages/Service';
import About from '../pages/About';
import Team from '../pages/Team';
import Achievement from '../pages/Achievement';
import Contact from '../pages/Contact';
import Blogs from '../pages/Blogs';
import BlogDetails from './blog/BlogDetails';

const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/service' element={<Service/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/team' element={<Team/>} />
        <Route exact path='/achievement' element={<Achievement/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<BlogDetails /> } /> 
      </Routes>
    </>
  )
}

export default Main
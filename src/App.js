import './App.css';
import React from 'react';

import Header from './components/Header';
import BodyHead from './components/body_header/BodyHead';
import Description from './components/Description';
import Specifications from './components/Specifications';
import WorkAlgorithm from './components/WorkAlgorithm';
import Projects from './components/project/Projects';
import Reviews from './components/reviews/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Header />
      <BodyHead />
      <Description />
      <Specifications />
      <WorkAlgorithm />
      <Projects />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

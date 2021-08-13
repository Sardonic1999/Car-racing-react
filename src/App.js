import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Body from './body';
import './App.css';
class Student extends React.Component{
  render() {
    return(
      <div className='app-container'>
        <Sidebar />
        <div className='app-wrapper'>
        <Navbar />
        <Body />
        </div>
      </div>
    );
  }
}

export default Student; 
import React, { Component } from 'react'
import './common.css';
import './navbar.css';
import rasm from './assets/logo.png';

export default class body extends Component {
    render() {
        return(
            <div className='container nav-con'>
                <input placeholder='Sardonic' className='nav-input1'/>
                <input placeholder='Sardonic' className='nav-input2'/>
                <i className='fa fa-bell' />
                <i className='fa fa-user' />
                <img src={rasm} alt='user' className='userImg' />
                <div></div>
            </div>
        );
    }
}
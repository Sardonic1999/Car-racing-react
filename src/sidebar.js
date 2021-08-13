import React, { Component } from 'react'
import './common.css';
import logo from './assets/logo.png';
import './sidebar.css'

export default class body extends Component {
    render() {
        return(
            <div className='container sidebar'>
                <div className='logoWrapper'>
                    <img className='logo' src={logo} alt='logo'/>
                    <p className='logo-text'>iffee</p>
                </div>
                <h1 className='menu'>Menu</h1>
                <div className='item'>
                    <i className='fa fa-home' />
                    <p className='item-text'>Home</p>
                </div>
                <div className='item'>
                    <i className='fa fa-fort-awesome' />
                    <p className='item-text'>Garage</p>
                </div>
                <div className='item'>
                    <i className='fa fa-connectdevelop' />
                    <p className='item-text'>Service Menu</p>
                </div>
                <div className='item'>
                    <i className='fa fa-chrome' />
                    <p className='item-text'>Racers</p>
                </div>
                <div className='item'>
                    <i className='fa fa-calculator' />
                    <p className='item-text'>Calculator</p>
                </div>
                <div className='item last-item'>
                    <i className='fa fa-gear' />
                    <p className='item-text'>Settings</p>
                </div>
                <div>
                    <p className='menu02'>Scheduled Races</p>
                </div>
                <div className='item02'>
                    <i className='fa fa-circle' />
                    <p className='item-text02'>MotoGP 2022</p>
                </div>
                <div className='item02'>
                    <i className='fa fa-circle' />
                    <p className='item-text02'>Dynamics 22</p>
                </div>
                <div className='item02 last-item02'>
                    <i className='fa fa-circle' />
                    <p className='item-text02'>Olympics</p>
                </div>
            </div>
        );
    }
}
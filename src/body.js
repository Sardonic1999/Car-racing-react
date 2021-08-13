import React, { Component } from 'react'
import './common.css';
import './body.css';
import car from './assets/car.PNG';
import icon01 from './assets/icon01.PNG';
import icon02 from './assets/icon02.PNG';
import icon03 from './assets/icon03.PNG';
import bot01 from './assets/bot01.PNG';
import bot02 from './assets/bot02.PNG';



export default class body extends Component {
    render() {
        return(
            <div className='container body'>
                <div className='card-wrapper'>
                    <div className='card'>
                        <i className='fa fa-key'></i>
                        <p>Start</p> 
                    </div>
                    <div className='card'>
                        <i className='fa fa-taxi'></i>
                        <p>Drive</p> 
                    </div>
                    <div className='card'>
                        <i className='fa fa-gear'></i>
                        <p>Maintinance</p> 
                    </div>
                    <div className='card'>
                        <i className='fa fa-battery'></i>
                        <p>Battery</p> 
                    </div>
                    <div className='card'>
                        <i className='fa fa-subway'></i>
                        <p>Tires</p> 
                    </div>
                    <div className='card'>
                        <i className='fa fa-lock'></i>
                        <p>Lock</p> 
                    </div>
                </div>
                <div className='inf'>
                    <div className='left-side'>
                        <div className='inf01'>
                            <p className='infinit'>Infiniti Renault</p>
                            <i className='fa fa-angle-left'></i>
                            <i className='fa fa-angle-right'></i>
                        </div>
                        <div>
                            <img src={car} alt='cars' className='carimg' />
                        </div>
                    </div>
                    <div className='right-side'>
                        <div className='right-item'>
                            <img src={icon01} alt='user01' className='iconImg' />
                            <div>
                            <h2>72</h2>
                            <p>Championships</p>
                            </div>
                        </div>
                        <div className='right-item'>
                            <img src={icon02} alt='user02' className='iconImg' />
                            <div>
                            <h2>32</h2>
                            <p>Skins</p>
                            </div>
                        </div>
                        <div className='right-item'>
                        <img src={icon03} alt='user03' className='iconImg' />
                            <div>
                            <h2>64</h2>
                            <p>Trophies Won</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left-bottom'>
                        <img src={bot01} alt='error01' className='botImg' />
                    </div>
                    <div className='right-bottom'>
                        <img src={bot02} alt='error01' className='botImg' />
                    </div>

                </div>
            </div>
        );
    }
}
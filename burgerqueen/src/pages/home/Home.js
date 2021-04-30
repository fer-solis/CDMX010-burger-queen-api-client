import React from 'react';
import './Home.css';
import logo from '../../assets/img/logo.png';
import Loginmodal from '../../components/loginModal/Loginmodal';

const Home = () => {
    return (
        <div className='card'>
            <div className='elements'>
                <img className='logo' src={logo} alt=''></img>
                <Loginmodal />
            </div>
        </div>
    );
}
export default Home
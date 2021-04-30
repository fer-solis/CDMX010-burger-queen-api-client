import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <MenuIcon onClick={showSidebar}/>
                </Link>
            </div> 
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <nav className='nav-back'>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                            </Link>
                        </li>  
                        {NavbarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}      
                    </ul>
                </nav> 
            </div>
        </div>
    )
}
export default Navbar
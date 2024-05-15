
import './Navbar.css'
import logo from '../../edusity_assets/logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import menu_icom from '../../edusity_assets/menu-icon.png'
const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    const [mobile_menu, setMobile_menu] = useState(false);
    const toggle_menu = () => {
        mobile_menu ? setMobile_menu(false) : setMobile_menu(true);

    }
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''} `} >
            <img src={logo} alt="" className='logo' />
            <ul className={mobile_menu? '' : 'hide-mobile-menu'}>
                <li> <Link to='hero' smooth={true} offset={0}
                    duration={500} >Home</Link> </li>

                <li><Link to='program' smooth={true} offset={-260}
                    duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150}
                    duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260}
                    duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260}
                    duration={500}>Testimonials</Link></li>
                <li><button className='btn'> <Link to='contact' smooth={true} offset={-260}
                    duration={500}>Contact us</Link></button></li>

                
            </ul>
            <img src={menu_icom} alt="" className='menu_icon' onClick={toggle_menu} />


        </nav>
    );
};

export default Navbar;
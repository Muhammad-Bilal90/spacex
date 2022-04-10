import Navbar from 'react-bootstrap/Navbar';
import Logo from './Images/Logo.jpeg';
import toggle from './Images/toggle.png';
import './styles.css';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <Navbar data-testid="navbar" className='navbarWrapper' expand="xl">
                <div className='iconWrapper'>
                    {/* <Link to='/'> */}
                        <Navbar.Brand href="#home" ><img src={Logo} className='zoom' alt="Logo" /></Navbar.Brand>
                    {/* </Link> */}
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> <img className="toggleButton" alt="toggle" src={toggle} ></img> </Navbar.Toggle>
                <Navbar.Collapse className="collapseMenu" id="basic-navbar-nav">
                    {/* <Nav className='mr-auto'> */}
                        <div>
                            <Link to='/missionItems'>
                            <button className="navigationButtons">
                                Missions
                            </button>
                            </Link>
                            <Link to='/rocketItems'>
                            <button className="navigationButtons">
                                Rockets
                            </button>
                            </Link>
                            <Link to='/shipItems'>
                            <button className="navigationButtons">
                                Ships
                            </button>
                            </Link>
                        </div>
                    {/* </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavigationBar;
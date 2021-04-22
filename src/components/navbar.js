import logo from "../assets/Logo.png";
import './navbar.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function App(props) {
    useEffect(() => {
        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else {
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });
        

        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
    }, [])
        const history = useHistory()
    const onLinkchange  = (e) => {
        history.push(`/${e.target.value}`)
    }
    return (
        <div>
            <nav id="navbar" class="navbar navbar-fixed-top">
                <div class="nav-wrapper">
                    <div class="logo">
                        <Link to="/home">
                            <a href="#home">
                                <img src={logo} height="35" width="35" style={{ margin: '5px' }} />CompareInsurance<span>India</span></a>
                        </Link>
                    </div>

                    <ul id="menu">
                        <Link to="/home"><li><a href="">Home</a></li></Link>

                        {/* <Link to="/aboutus">
                            <li><a href="#about">About</a></li>
                        </Link> */}
                        <li>
                            <select  onChange={onLinkchange}>
                                <option disabled selected>CATEGORIES</option>
                                <option value="health">Health Insurance</option>
                                <option value="car">Car Insurance</option>
                                <option value="term">Term Insurance</option>
                                <option value="travel">Travel Insurance</option>
                                <option value="bike">Bike Insurance</option>
                                <option value="investment">Investments Plans</option>
                            </select>

                        </li>
                        <Link to="/contactus"><li><a href="">Contact</a></li></Link>
                    </ul>
                </div>
            </nav>


            <div class="menuIcon">
                <span class="icon icon-bars"></span>
                <span class="icon icon-bars overlay"></span>
            </div>


            <div class="overlay-menu">
                <ul id="menu">
                    <Link to="/home"><li><a href="">Home</a></li></Link>

                    {/* <Link to="/aboutus">
                        <li><a href="">About</a></li>
                            
                    </Link> */}
                    <Link to="/categories">  <li>
                        {/* <select style={{backgroundColor:"#4370ff", fontSize:"1em" , fontWeight:'bold'}} onChange={onLinkchange}>
                            <option disabled selected>CATEGORIES</option>
                            <option>Health Insurance</option>
                            <option>Car Insurance</option>
                            <option>Term Insurance</option>
                            <option>Travel Insurance</option>
                            <option>Bike Insurance</option>
                            <option>Investments Plans</option>
                        </select> */}
                      <a href="">Categories</a>
                    </li></Link>
                    <Link to="/contactus"><li><a href="">Contact</a></li></Link>
                </ul>
            </div>

        </div>
    );
}

export default App;

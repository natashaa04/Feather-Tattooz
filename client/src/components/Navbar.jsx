import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import NavbarLogo from "../assets/navbar-logo.png"

class Navbar extends Component {
    state={clicked: false};
    handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <img className="navbar-logo" src={NavbarLogo} alt="" />
                {/* <h1 className="navbar-logo">Featherz Tattoo</h1> */}

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
                    {MenuItems.map((items, index) => {
                        return (
                            <li key={index}>
                                <Link className={items.cName} to={items.url}>
                                    <i className={items.icon}> </i> {items.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Logo from "./rare.jpeg"

export const NavBar = props => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src={Logo} alt="navbar-logo"/>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/profiles">Profiles</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/categories">Category Management</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar__link" to="/posts">Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tags">Manage Tags</Link>
            </li>
            {
                (localStorage.getItem("r_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("r_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}

import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Logo from "./rare.jpeg"

export const NavBar = props => {
    const userId = localStorage.getItem("user_id")
    const myPostsLink = `/myposts/${userId}`
    return (
        <ul className="navbar">
            <li className="navbar__logo">
                <img className="navbar__logo" src={Logo} alt="navbar-logo"/>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/allposts">All Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to={myPostsLink}>My Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/categories">Category Manager</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tags">Tag Manager</Link>
            </li>
            {
                (localStorage.getItem("r_token") !== null) ?
                    <li className="nav-item navbar__item">
                        <button className=" btn btn-outline-primary nav__button"
                            onClick={() => {
                                localStorage.removeItem("r_token")
                                localStorage.removeItem("user_id")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="navbar__item">
                            <Link className="nav__button navbar__item" to="/login">Login</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="nav__button" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}

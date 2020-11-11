import React, { useState, useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"
import authData from '../utils/authData'


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const invalidDialog = useRef()
    const history = useHistory()

    const setEmailEvent = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    };

    const setPasswordEvent = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    };

    const handleLogin = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }
        console.log(user)

        return authData.validateUserLogin(user)
            .then(res => {
                console.log(res)
                if (true === res.data.response) {
                    localStorage.setItem("user_id", res.data.user_id )
                    console.log(localStorage)
                    console.log(res)
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
            .catch((err) => console.error(err))
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Level Up</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input 
                            type="email"
                            id="email" 
                            className="form-control" 
                            value={email} 
                            placeholder="Email address" 
                            onChange={setEmailEvent}
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input  
                        type="password" 
                        id="password" 
                        className="form-control" 
                        value={password}
                        onChange={setPasswordEvent}
                        placeholder="Password" 
                        required />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

import React, {useState} from "react"
import { createRef, useRef } from "react"
import { Link } from "react-router-dom"
import "./Auth.css"
export const Register = (props) => {
    const first_name = React.createRef()
    const last_name = React.createRef()
    const email = React.createRef()
    const bio = React.createRef()
    const password = createRef()
    const verifyPassword = createRef()
    const passwordDialog = createRef()
    const avatarUrl = React.createRef()

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
      }
    
      const createGameImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            avatarUrl.current = base64ImageString
        });
      }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": email.current.value,
                "first_name": first_name.current.value,
                "last_name": last_name.current.value,
                "bio": bio.current.value,
                "email": email.current.value,
                "password": password.current.value,
                "avatar_url": avatarUrl.current
            }
            console.log(avatarUrl)

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("r_token", res.token)
                        localStorage.setItem("user_id", res.user_id)
                        props.history.push("/")
                    }
                })  
            } else {
                passwordDialog.current.showModal()
            }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="first_name"> First Name </label>
                    <input ref={first_name} type="text" name="name" className="form-control" placeholder="First Name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="last_name"> Last Name </label>
                    <input ref={last_name} type="text" name="name" className="form-control" placeholder="Last Name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <div className="form-group">
                    <label htmlFor="avatarUrl">Image: </label>
                    <input type="file" id="avatarUrl" onChange={createGameImageString} />
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="bio"> Bio </label>
                    <input ref={bio} type="bio" name="bio" className="form-control" placeholder="Bio" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}

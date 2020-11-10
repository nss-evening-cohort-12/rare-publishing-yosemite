import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Categories }  from "./categories/Categories"
import { UpdateCategory} from "./categories/UpdateCategory"

import { Tags } from "./tags/Tags"
import { AddTag } from "./tags/AddTag"

export const Rare = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <>
                    <NavBar />
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <Redirect to="/" />
            } else {
                return <Register />
            }
        }} />

        <Route path="/categories" render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <Categories />      
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/updateCategory/:categoryId" render={(props) => {
            if (localStorage.getItem("rare_user_id")) {
                return <UpdateCategory {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/tags" render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <Tags />
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/addTag" render={() => {
            if (localStorage.getItem("rare_user_id")) {
                return <AddTag />
            } else {
                return <Redirect to ="/" />
            }
        }} />

  </>
)

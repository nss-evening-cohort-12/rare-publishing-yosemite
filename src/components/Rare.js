import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Categories }  from "./categories/Categories"
import { UpdateCategory} from "./categories/UpdateCategory"
import { UserPosts } from './posts/UserPosts'
import { Tags } from "./tags/Tags"
import { AddTag } from "./tags/AddTag"
import { EditTag } from "./tags/EditTag"
import { Posts } from "./posts/Posts"
import { NewPost } from "./posts/NewPost"
import { SinglePost } from "./posts/SinglePost"
import { UpdatePost } from './posts/UpdatePost'

export const Rare = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("user_id")) {
                return <>
                    <NavBar />
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={() => {
            if (localStorage.getItem("user_id")) {
                return <Redirect to="/" />
            } else {
                return <Login />
            }
        }} />

        <Route path="/register" render={() => {
            if (localStorage.getItem("user_id")) {
                return <Redirect to="/" />
            } else {
                return <Register />
            }
        }} />

        <Route path="/categories" render={() => {
            if (localStorage.getItem("user_id")) {
                return <Categories />      
            } else {
                return <Redirect to ="/" />
            }
        }} />

        <Route path="/updateCategory/:categoryId" render={(props) => {
            if (localStorage.getItem("user_id")) {
                return <UpdateCategory {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/tags" render={() => {
            if (localStorage.getItem("user_id")) {
                return <Tags />
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/addTag" render={() => {
            if (localStorage.getItem("user_id")) {
                return <AddTag />
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/editTag/:tagId" render={(props) => {
            if (localStorage.getItem("user_id")) {
                return <EditTag {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/posts" render={() => {
            if (localStorage.getItem("user_id")) {
                return <Posts />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/addPost" render={() => {
            if (localStorage.getItem("user_id")) {
                return <NewPost />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/post/:postId" render={(props) => {
            if (localStorage.getItem("user_id")) {
                return <SinglePost {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/myPosts" render={() => {
            if (localStorage.getItem("user_id")) {
                return <UserPosts />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/editPost/:postId" render={(props) => {
            if (localStorage.getItem("user_id")) {
                return <UpdatePost {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }}/>
    </>

)

import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Categories }  from "./categories/Categories"
import { UpdateCategory} from "./categories/UpdateCategory"
import { UserPosts } from './posts/UserPosts' 
import { Posts } from "./posts/Posts"
import { NewPost } from "./posts/NewPost"
import { SinglePost } from "./posts/SinglePost"
import { CreateComment } from "./comments/CreateComment"
import { EditComment } from "./comments/EditComment"
import { UserProfiles } from "./users/UserProfiles"
import { UpdatePost } from './posts/UpdatePost'
import { NewCategory } from "./categories/NewCategory"
import { SingleUser } from './users/SingleUser'

export const Rare = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("r_token")) {
                return <>
                    <Route render={NavBar} />
                    <Route render={props => <ApplicationViews { ...props } />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />

        {/* <Route path="/categories" render={() => {
            if (localStorage.getItem("r_token")) {
                return <Categories />      
            } else {
                return <Redirect to ="/" />
            }
        }} />

        <Route path="/updateCategory/:categoryId" render={(props) => {
            if (localStorage.getItem("r_token")) {
                return <UpdateCategory {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }} />
        <Route path="/posts" render={() => {
            if (localStorage.getItem("r_token")) {
                return <Posts />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/addPost" render={() => {
            if (localStorage.getItem("r_token")) {
                return <NewPost />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/post/:postId" render={(props) => {
            if (localStorage.getItem("r_token")) {
                return <SinglePost {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/addComment/:postId" render={(props) => {
            if (localStorage.getItem("r_token")) {
                return <CreateComment {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/myPosts" render={() => {
            if (localStorage.getItem("r_token")) {
                return <UserPosts />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/editComment/:commentId" render={(props) => {
            if (localStorage.getItem("r_token")) {
                return <EditComment {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/editPost/:postId" render={(props) => {
            if (localStorage.getItem("r_token")) {
                return <UpdatePost {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/newCategory" render={() => {
            if (localStorage.getItem("r_token")) {
                return <NewCategory />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/profiles" render={() => {
            if (localStorage.getItem("r_token")) {
                return <UserProfiles />
            } else {
                return <Redirect to ="/" />
            }
        }}/>
        <Route path="/singleUser/:userId" render={(props) => {
            if (localStorage.getItem("r_token")) {
                return <SingleUser {...props}/>
            } else {
                return <Redirect to ="/" />
            }
        }}/> */}
    </>

)

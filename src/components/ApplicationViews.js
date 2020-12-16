import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from './categories/CategoriesList'
import { CategoryProvider } from './categories/CategoryProvider'

import { TagProvider } from './tags/TagProvider'
import { Tags } from "./tags/Tags"
import { TagForm } from './tags/TagForm'
import { CommentProvider } from "./comments/CommentProvider"
import { PostComments } from "./comments/PostComments"

import { PostProvider } from './posts/PostProvider'
import { Posts } from './posts/Posts'
import { PostForm } from './posts/PostForm'
import { SinglePost } from './posts/SinglePost'

import { Home } from './home/Home'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <TagProvider>
                <CategoryProvider>
                    <PostProvider>
                        <Route exact path="/allposts" render={props => <Posts {...props} />}/>
                        <Route exact path="/addPost" render={props => <PostForm {...props} />}/>
                        <Route exact path="/posts/:postId" render={props => <SinglePost {...props} />}/>
                        <Route exact path="/posts/:postId(\d+)/edit" render={props => <PostForm {...props} />}/>
                        <Route exact path="/categories" render={props => <CategoryList {...props} />}/>
                        <Route exact path="/tags" render={props => <Tags {...props} />} />
                        <Route exact path="/tags/new" render={props => <TagForm {...props} />} />
                        <Route exact path="/tags/:tagId(\d+)/edit" render={props => <TagForm {...props} />} />
                        <Route exact path="/" render={props => <Home {...props} />}/>
                    </PostProvider>
                </CategoryProvider>
            </TagProvider>
            <CommentProvider>
                <Route exact path="/comments/:postId(\d+)" render={props => <PostComments {...props} />} />
            </CommentProvider>
        </main>
    </>
}

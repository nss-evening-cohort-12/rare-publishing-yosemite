import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from './categories/CategoriesList'
import { CategoryProvider } from './categories/CategoryProvider'
import { CategoryForm } from './categories/CategoryForm'

import { TagProvider } from './tags/TagProvider'
import { Tags } from "./tags/Tags"
import { TagForm } from './tags/TagForm'
import { CommentProvider } from "./comments/CommentProvider"
import { PostComments } from "./comments/PostComments"

import { PostProvider } from './posts/PostProvider'
import { Posts } from './posts/Posts'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <Route exact path="/allposts" render={props => <Posts {...props} />}/>
            </PostProvider>
            <CategoryProvider>
                <Route exact path="/categories" render={props => <CategoryList {...props} />}/>
                <Route exact path="/categories/:categoryId(\d+)/edit" render={props => <CategoryForm {...props} />}/>
            </CategoryProvider>
            <TagProvider>
                <Route exact path="/tags" render={props => <Tags {...props} />} />
                <Route exact path="/tags/new" render={props => <TagForm {...props} />} />
                <Route exact path="/tags/:tagId(\d+)/edit" render={props => <TagForm {...props} />} />
            </TagProvider>
            <CommentProvider>
                <Route exact path="/comments/:postId(\d+)" render={props => <PostComments {...props} />} />
            </CommentProvider>
        </main>
    </>
}

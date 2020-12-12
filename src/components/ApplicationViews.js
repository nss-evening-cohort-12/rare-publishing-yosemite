import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from './categories/CategoriesList'
import { CategoryProvider } from './categories/CategoryProvider'

import { TagProvider } from './tags/TagProvider'
import { Tags } from "./tags/Tags"
import { TagForm } from './tags/TagForm'

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
            </CategoryProvider>
            <TagProvider>
                <Route exact path="/tags" render={props => <Tags {...props} />} />
                <Route exact path="/tags/new" render={props => <TagForm {...props} />} />
                <Route exact path="/tags/:tagId(\d+)/edit" render={props => <TagForm {...props} />} />
            </TagProvider>
        </main>
    </>
}

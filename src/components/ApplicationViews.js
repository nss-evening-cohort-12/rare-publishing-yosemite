import React from "react"
import { Route } from "react-router-dom"
import { TagProvider } from './tags/TagProvider'
import { Tags } from "./tags/Tags"
import { TagForm } from './tags/TagForm'
import { CommentProvider } from "./comments/CommentProvider"
import { PostComments } from "./comments/PostComments"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
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

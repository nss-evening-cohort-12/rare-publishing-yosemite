import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from './categories/CategoriesList'
import { CategoryProvider } from './categories/CategoryProvider'


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <CategoryProvider>
                <Route exact path="/categories" render={props => <CategoryList {...props} />}/>
            </CategoryProvider>
        </main>
    </>
}

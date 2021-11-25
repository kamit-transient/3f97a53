import React from 'react'
import AppLink from './app/appLink'

function Category({ node }) {
    return (
        <>
            {
                node.topics.nodes.map(c => (
                    <div key={c.name} className="font-heading tracking-wide text-secondary text-opacity-100 hover:text-opacity-100  bg-animate-right text-sm px-1">
                        <AppLink to={c.uri} className="">
                            {c.name}
                        </AppLink>
                        <div className="h-1 w-1 rounded-full bg-primary inline-flex opacity-50"></div>
                    </div>
                ))
            }
        </>
    )
}

export default Category

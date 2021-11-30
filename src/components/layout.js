

import * as React from "react"
import PropTypes from "prop-types"


import Header from "./header"


const Layout = ({ children }) => {


  return (
    <>
      <Header />
      <div className="pt-24 font-body">
        <main className="px-2 sm:px-5">{children}</main>
        <footer className="px-2 sm:px-5">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Next</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

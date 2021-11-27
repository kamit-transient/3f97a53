

import * as React from "react"
import PropTypes from "prop-types"


import Header from "./header"


const Layout = ({ children }) => {


  return (
    <>
      <Header />
      <div className="pt-24 font-body">
        <main>{children}</main>
        <footer>
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

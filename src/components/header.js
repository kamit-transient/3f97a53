import * as React from "react"
import PropTypes from "prop-types"
import AppLink from "./app/appLink"
import Link from 'next/link'


const Header = ({ siteTitle }) => (
  <header className="text-gray-50 text-opacity-95 font-body fixed bg-primary w-full z-20 shadow-md">
    <div className="container mx-auto flex flex-wrap px-5 py-4 flex-row md:flex-row items-center">
      {/* <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <span className="mr-5 hover:text-gray-900">First Link</span>
        <span className="mr-5 hover:text-gray-900">Second Link</span>
        <span className="mr-5 hover:text-gray-900">Third Link</span>
        <span className="hover:text-gray-900">Fourth Link</span>
      </nav> */}
      <Link href="/" className="flex order-first lg:order-none  lg:w-1/5 font-heading font-bold tracking-wide items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        <a>

          <span className="ml-3 text-xl text-blue-50 font-bold ">Omg Converter</span>
        </a>

      </Link>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <div className="bg-white bg-opacity-100 text-primary font-bold tracking-wider px-3 py-1 rounded-md transform transition-transform hover:scale-x-110  cursor-pointer">Button

        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `HealthTiiips`,
}

export default Header

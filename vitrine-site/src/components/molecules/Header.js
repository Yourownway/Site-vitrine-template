import * as React from "react"
import PropTypes from "prop-types"

import useMediaQuery from "../../Hooks/useMediaQuery"
import "./header.scss"
import NavMobile from "./NavMobile"
const Header = ({ siteTitle }) => (
  <header className="header__mobile">
    <NavMobile />

    <div className="header__mobile__img"></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

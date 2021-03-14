import React, { useState } from "react"
import { Link } from "gatsby"
import "./burger.scss"
import { border_menu } from "../../images/index"
export default function Burger() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {" "}
      <div className="menu__wrap">
        <input
          className="menu__wrap--toggler"
          type="checkbox"
          checked={open}
          onChange={() => setOpen(!open)}
        />
        <div className="menu__wrap__hamburger"> </div>

        <>
          <div className="menu__list">
            <img
              src={border_menu}
              className="menu__list__border top"
              alt="border"
            ></img>
            <Link to="/accueil">Accueil</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/creations">Mes Créations</Link>
            <Link to="/tarif">Tarif</Link>
            <Link to="/contact">Contact</Link>
            <img
              className="menu__list__border btm"
              src={border_menu}
              alt="border"
            ></img>
          </div>
        </>
      </div>
    </>
  )
}

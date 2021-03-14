import React from "react"
import Burger from "../atoms/Burger"
import "./header.scss"
export default function NavMobile() {
  return (
    <>
      <div className="header__mobile__nav">
        <Burger />
        <h1 className="header__title">Les guidances de Lucie</h1>
      </div>
      <h3 className="header__mobile__href">Accueil</h3>
    </>
  )
}

import React, { useEffect, useState } from "react"
import Burger from "../atoms/Burger"
import "./header.scss"
export default function NavMobile() {
  const [hash, setHash] = useState(null)
  useEffect(() => {
    let path = window.location.pathname.split("/")
    if (!path) {
      return setHash(null)
    }
    path = path[1].charAt(0).toUpperCase() + path[1].slice(1)
    console.log("path", path)
    setHash(path)
    return hash
  }, [window.location.hash])
  console.log(window.location, "hash")
  return (
    <>
      <div className="header__mobile__nav">
        <Burger />
        <h1 className="header__title">Les guidances de Lucie</h1>
      </div>
      {hash ? <h3 className="header__mobile__hash">{hash}</h3> : null}
    </>
  )
}

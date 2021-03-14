import React from "react"
import Header from "../molecules/Header"
import { instagram, facebook } from "../../images/index"
import "./home.scss"

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__follow">
        <h2 className="home__h2">Suivez moi sur :</h2>
        <div className="home__social">
          <img
            className="home__social__insta"
            src={instagram}
            alt="instagram"
          ></img>
          <img className="home__social__fb" src={facebook} alt="facebook"></img>
        </div>
      </div>
    </div>
  )
}

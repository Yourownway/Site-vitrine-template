import React from "react"
import NavMobile from "../components/molecules/NavMobile"
import { author } from "../images/index"
export default function Accueil() {
  return (
    <>
      <NavMobile />
      <section className="section">
        <h4>Qui suis-je?</h4>
        <div className="section__part1">
          <img
            className="section__part1__img"
            src={author}
            alt="author image"
          ></img>
          <p className="section__p1">
            Bonjour et bienvenue, je m’appelle Lucie, j’ai 38 ans et je suis
            ravie que tes guides t’aient conduit(e) vers moi. Infirmière de
            formation depuis 2007, je me suis toujours sentie “au service” et
            j’ai toujours eu à cœur d’aider et de prendre soin des autres à
            travers la relation d’aide en utilisant mon canal intuitif.
            <br />
            Aujourd’hui après un gros travail sur moi-même et avoir réalisé ce
            que j’étais depuis toujours, je vous propose mes services
            d’accompagnement en tant qu’
            <span className="bold">infirmière de l’âme </span>afin de vous
            apporter les messages qui vous guideront et apporteront de la
            lumière dans vos diverses interrogations, problèmes, blocages du
            moment. J’utilise le tirage d’oracles comme support à mon canal
            médiumnique. Deuil, dépression, situations qui se répètent, amour,
            finances, travail, parfois c’est lourd, dur et on se sent très
            seul(e). Il suffit parfois d’une guidance pour retrouver sa route et
            la paix en Soi.
            <br />
            C’est avec grand plaisir que je vous accompagne afin de vous aider à
            comprendre la racine de votre problématique, de vous donner les
            clefs pour la gérer, et d’obtenir les messages de vos guides.
          </p>
        </div>
      </section>
    </>
  )
}

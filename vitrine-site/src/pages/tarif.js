import React from "react"
import NavMobile from "../components/molecules/NavMobile"

export default function tarif() {
  return (
    <>
      <NavMobile />
      <section className="section">
        <h4>Divination</h4>

        <p>
          Je vous propose plusieurs possibilités. Pour chacune, merci de
          m’exposer votre problématique ainsi que votre nom complet et votre
          date de naissance dans le formulaire. La réponse vous sera envoyée
          dans les 48h au plus tard.{" "}
        </p>

        <p>
          {" "}
          1/ Guidance concernant 1 domaine: 30€
          <br /> 2/ Guidance concernant 2 domaines: 40€
          <br /> 3/ Guidance complète: 50€
          <br /> 4/ Service d’accompagnement sur 1 semaine “besoin d’aide”: 70€
          <br />
          <br />
          <span className="italic">
            "Echange de mails quotidiens et de supports sur 7 jours afin d’aller
            plus loin dans la compréhension de l’épreuve de vie rencontrée afin
            de la surmonter"
          </span>
        </p>
      </section>
    </>
  )
}

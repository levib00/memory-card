import React from "react";
import CardCSS from '../styles/card.module.css'

export const Card = (props) => {

  const { clickFunc, image, hero } = props

  return (
    <button className={CardCSS.heroCard} onClick={() => clickFunc(hero)}>
      <img className={CardCSS.heroImage} src={image} alt={`${hero} from Overwatch`}/>
      <div className={CardCSS.heroName}>
        {hero}
      </div>
    </button>
  )
}
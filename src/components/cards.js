import React from "react";

export const Card = (props) => {

  const { clickFunc, image, hero } = props

  return (
    <button onClick={() => clickFunc(hero)}>
      <div>
          <img src={image} alt={`${hero} from Overwatch`}/>
      </div>
      <div>
        {hero}
      </div>
    </button>
  )
}
import React, { useState } from "react";
import { Card } from './cards'
import cardContainerCSS from '../styles/card-container.module.css'

export const CardContainer = (props) => {
  const heroArray = [
    {
      hero: 'Cassidy',
      img: require('../images/cassidy.png'),
    },
    {
      hero: 'Genji',
      img: require('../images/genji.png'),
    },
    {
      hero: 'Tracer',
      img: require('../images/tracer.png'),
    },
    {
      hero: 'Widowmaker',
      img: require('../images/widowmaker.png'),
    },
    {
      hero: 'Hanzo',
      img: require('../images/hanzo.png'),
    },
    {
      hero: 'Mei',
      img: require('../images/mei.png'),
    },
    {
      hero: 'Junkrat',
      img: require('../images/junkrat.png'),
    },
    {
      hero: 'Ashe',
      img: require('../images/ashe.png'),
    },
    {
      hero: 'Reaper',
      img: require('../images/reaper.png'),
    },
    {
      hero: 'Sombra',
      img: require('../images/sombra.png'),
    },
    {
      hero: 'Soldier: 76',
      img: require('../images/soldier76.png'),
    },
    {
      hero: 'Pharah',
      img: require('../images/pharah.png'),
    },
  ]

  const [clickedHeroes, setClickedHeroes] = useState([])

  const [heroes, setHeroes] = useState(heroArray);

  const shuffleCards = () => {
    setHeroes(shuffle(heroes));
  }

  const {resetScore, incrementScore} = props

  const clickFunc = (hero) => {
    shuffleCards()
    if (!clickedHeroes.includes(hero)) {
      incrementScore()
      setClickedHeroes([...clickedHeroes, hero])
    } else {
      resetScore()
      setClickedHeroes([])
    }
    
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    const newArray = [...array]
    return newArray;
  }

  return (
  
    <div className={cardContainerCSS.gridContainer}>
      <div className={cardContainerCSS.cardGrid}>
        {heroes.map(listItem => {
          return <Card clickFunc={clickFunc} incrementScore={props.incrementScore} listItem={listItem} image={listItem.img} hero={listItem.hero} key={listItem.hero}/>
        })}
      </div>
    </div>
  )
}
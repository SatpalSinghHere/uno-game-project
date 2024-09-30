'use client'
import React, { useEffect } from 'react';
import card from '@/utils/card.svg';
import CardTemplate from '@/utils/Card';

import { Card, cardList } from '@/utils/cardObjects';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

const VisibleCards = () => {
  const dispatch = useDispatch();
  const [cards, setCards] = React.useState(cardList);
  const [midIndex, setMidIndex] = React.useState(0);

  const centralDeck = useSelector((state: { centralDeck: Array<Card> }) => state.centralDeck);

  // const divWidth = window.innerWidth * 0.4

  const usedCards = (cardObject: Card) => {
    if(centralDeck[centralDeck.length - 1].color === cardObject.color || centralDeck[centralDeck.length - 1].value === cardObject.value){
      setCards(cards.filter((card) => card !== cardObject));
      dispatch({ type: 'centralDeck/addCard', payload: cardObject });
    }
    
  };


  useEffect(() => {
    console.log(cards)
    setMidIndex((Math.floor(cards.length + 1) / 2))
  }, [cards])
  return (

    <div className='absolute bottom-[10%] bg-slate-500 w-2/5 h-1/5 left-1/2 translate-x-[-50%]'>
      {/* <Card className={"h-full w-auto absolute translate-x-[-56px] hover:translate-y-[-8px] duration-75 cursor-pointer"} color={green} value={"4"} />
      <Card className={"h-full w-auto absolute translate-x-[-28px] hover:translate-y-[-8px] duration-75 cursor-pointe"} color={blue} value={"7"} />
      <Card className={"h-full w-auto absolute hover:translate-y-[-8px] duration-75 cursor-pointer"} color={yellow} value={"2"} />
      <Card className={"h-full w-auto absolute translate-x-[28px] hover:translate-y-[-8px] duration-75 cursor-pointer"} color={red} value={"9"} />
      <Card className={"h-full w-auto absolute translate-x-[56px] hover:translate-y-[-8px] duration-75 cursor-pointer"} color={green} value={"10"} />     
      <ReverseCard className={"h-full w-auto absolute translate-x-[84px] hover:translate-y-[-8px] duration-75 cursor-pointer"} color={green} value={"10"} />      */}
      {cards.map((cardObject, index) => {
        // const translateX = (index + 1 - midIndex) * 28;
        

        // const cardGap = divWidth / cards.length

        // console.log(cardGap)
        
        const translateX = index * 28;

        const styles = {
          transform: `translateX(${translateX}px)`,
          zIndex: index
        }

        // // Using clsx to conditionally build the class string dynamically
        // const cardClasses = clsx(
        //   'h-full w-auto absolute hover:translate-y-[-8px] hover:scale-125 hover:z-[100] duration-75 cursor-pointer bg-white rounded-lg',
        //   // `translate-x-[${translateX}px]` // Tailwind-compatible class name with dynamic value
        // );

        return (
          <div key={index} className={'h-full w-auto absolute'} style={styles} onClick={() => { usedCards(cardObject) }}>
            <CardTemplate

              className={' h-full w-auto bg-white rounded-lg hover:translate-y-[-8px] hover:scale-125 hover:z-[100] duration-75 cursor-pointer'}
              color={cardObject.color}
              value={cardObject.value}
            />
          </div>
        );
      })}
    </div>

  );
}

export default VisibleCards

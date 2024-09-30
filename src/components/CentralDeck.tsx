import CardTemplate from '@/utils/Card';
import { Card } from '@/utils/cardObjects';
import clsx from 'clsx';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CentralDeck = () => {
  // const dispatch = useDispatch();
  const centralDeck = useSelector((state: { centralDeck: Array<Card> }) => state.centralDeck);
  console.log(centralDeck)
  return (
    <div className=' w-1/12 h-36 absolute bottom-[40%] left-1/2 translate-x-[-50%]'>
      {centralDeck.map((cardObj, index) => {
        const getRandomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min)) + min;
        const degree = getRandomInt(-70,70)

        const cardStyles = {
          transform: `rotate(${degree}deg)`,
          transformOrigin: 'center',
        };
        const cardClasses = clsx(
          'h-full w-auto absolute bg-white rounded-lg left-1/2 translate-x-[-50%] cursor-default',
          // `rotate-[${degree}deg]` // Tailwind-compatible class name with dynamic value
        );

        return <div className={cardClasses} key={index} ><CardTemplate className={cardClasses} color={cardObj.color} value={cardObj.value} /></div>
      })}
    </div>
  )
}

export default CentralDeck

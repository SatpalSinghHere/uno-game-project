import CardTemplate from '@/utils/Card'
import { cardList } from '@/utils/cardObjects'
import React, { useState } from 'react'

const PlayerLeft = () => {

  const [cards, setCards] = useState(cardList)

  return (
    <div className='bg-slate-500 w-1/12 h-1/2 absolute left-[10%] top-1/2 translate-y-[-50%]'>
      {cards.map((cardObj, index)=>{

        const translateY = index * 28

        const styles = {
          transform: `translateY(${translateY}px)`,
          zIndex: index
        }

        return (
          <div key={index} className='absolute' style={styles}>
            <CardTemplate className={'w-full h-auto bg-white rounded-lg rotate-90'}  color={cardObj.color} value={cardObj.value} />
          </div>
        )
      })}
    </div>
  )
}

export default PlayerLeft

import CardTemplate from '@/utils/Card'
import CardBack from '@/utils/CardBack'
import { cardList } from '@/utils/cardObjects'
import React, { useState } from 'react'

const PlayerRight = () => {
  const [cards, setCards] = useState(cardList)

  return (
    <div className=' w-1/12 h-1/2 absolute right-[10%] top-1/2 translate-y-[-50%]'>
      {cards.map((cardObj, index)=>{

        const translateY = index * 28

        const styles = {
          transform: `translateY(${translateY}px)`,
          zIndex: index
        }

        return (
          <div key={index} className='absolute' style={styles}>
            <CardBack className={'w-full h-auto bg-white rounded-lg -rotate-90'}/>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerRight

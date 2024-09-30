"use client"
import CentralDeck from '@/components/CentralDeck'
import PlayerLeft from '@/components/PlayerLeft';
import PlayerRight from '@/components/PlayerRight';
import PlayerTop from '@/components/PlayerTop';
import UsedCards from '@/components/UsedCards'
import VisibleCards from '@/components/VisibleCards'
import React, { ChangeEvent, useState } from 'react'

const page = () => {
    const [players, setPlayers] = useState(2);

    const handlePlayerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPlayers(parseInt(e.target.value));
      };
  return (
    <div className="absolute w-full h-full items-center bg-red-950">
      <label htmlFor="players">Enter number of players:</label>
      <select onChange={handlePlayerChange} value={players}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <UsedCards />
      {players === 2 && <PlayerTop />}
      {players === 3 && (
        <>
          <PlayerLeft />
          <PlayerRight />
        </>
      )}
      {players === 4 && (
        <>
          <PlayerLeft />
          <PlayerRight />
          <PlayerTop />
        </>
      )}
      <CentralDeck />
      <VisibleCards />
    </div>
  )
}

export default page

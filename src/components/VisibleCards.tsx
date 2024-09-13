import React from 'react';
import card from '@/utils/card.svg'; 
import Card from '@/utils/Card';

const red="D32F2F";
const green = "#04db48";
const blue = "";
const yellow = "";

const VisibleCards = () => {
  return (
    <div className='bg-slate-500 w-3/5 h-1/5 flex justify-center items-center'>
      <Card className={"h-full w-auto"} cardColor={green} />
      
    </div>
  );
}

export default VisibleCards

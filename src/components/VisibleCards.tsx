import React from 'react';
import card from '@/utils/card.svg'; 
import Card from '@/utils/Card';

const red="#D32F2F";
const green = "#04db48";
const blue = "#0381FF";
const yellow = "#F8FF03";

interface cardProps {
  className : string,
  color: string,
  value: string
}

const VisibleCards = () => {
  const [cards, setCards] = React.useState([]);
  return (
    <div className='bg-slate-500 w-3/5 h-1/5 relative flex justify-center items-center'>
      <Card className={"h-full w-auto absolute translate-x-[-56px]"} color={green} value={"4"} />
      <Card className={"h-full w-auto absolute translate-x-[-28px]"} color={blue} value={"7"} />
      <Card className={"h-full w-auto absolute "} color={yellow} value={"2"} />
      <Card className={"h-full w-auto absolute translate-x-[28px]"} color={red} value={"9"} />
      <Card className={"h-full w-auto absolute translate-x-[56px]"} color={green} value={"10"} />     
    </div>
  );
}

export default VisibleCards

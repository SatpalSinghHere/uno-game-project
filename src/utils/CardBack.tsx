import React from 'react'

const CardBack = ({className, color, value}:{className: string, color: string, value: string}) => {
    return (
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" className={className}>
        {/* <!-- Background rectangle --> */}
        <rect x="10" y="10" width="180" height="280" rx="20" ry="20" fill={color} stroke="white" strokeWidth="4"/>
        
        {/* <!-- Oval in the center --> */}
        <ellipse cx="100" cy="150" rx="70" ry="110" fill="white" stroke={color} strokeWidth="4"/>
        
        {/* <!-- "REVERSE" text, larger, bolder, and rotated 45 degrees counterclockwise --> */}
        <text x="100" y="150" fontFamily="Arial Black, Arial, sans-serif" fontSize="28" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle" transform="rotate(-45, 100, 150)">REVERSE</text>
      </svg>
        
    )
}

export default CardBack

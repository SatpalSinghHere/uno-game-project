import React from 'react'

const Card = ({className}:{className:string}, {cardColor}:{cardColor:string}) => {
    return (
        
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 350" className={className}>
                {/* <!-- Card background --> */}
                <rect x="10" y="10" width="230" height="330" rx="20" ry="20" fill={cardColor} />

                {/* <!-- White oval --> */}
                <ellipse cx="125" cy="175" rx="100" ry="140" fill="white" stroke={cardColor} stroke-width="5" />

                {/* <!-- Main number 4 --> */}
                <text x="125" y="240" font-family="Arial, sans-serif" font-size="180" font-weight="bold" text-anchor="middle" fill="#D32F2F">4</text>

                {/* <!-- Top-left number 4 --> */}
                <text x="30" y="50" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white">4</text>

                {/* <!-- Bottom-right number 4 (rotated and repositioned) --> */}
                <text x="220" y="340" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" transform="rotate(180 220 320)">4</text>
            </svg>
        
    )
}

export default Card

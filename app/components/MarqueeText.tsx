// components/MarqueeText.tsx
import React from 'react';
import ScrollVelocity from './ScrollVelocity/ScrollVelocity';

const MarqueeText = () => {
    return (
        <div className="w-full overflow-hidden text-white py-2">
        <ScrollVelocity
            texts={['Fullstack Developer', 'UI/UX Design']} 
            velocity={75} 
            className="custom-scroll-text"
            />
        </div>
    );
};

export default MarqueeText;
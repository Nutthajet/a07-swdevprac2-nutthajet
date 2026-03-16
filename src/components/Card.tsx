'use client'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function ProductCard({venueName, imgSrc, onRatingChange}:
    {venueName:string, imgSrc:string, onRatingChange:Function}){
    const [ratingValue, setRatingValue] = useState<number | null>(0);
    return(
        <InteractiveCard contentName={venueName}>
            <div className="relative w-full h-[70%]">
                <Image src={imgSrc}
                alt = {venueName}
                fill = {true}
                className='object-cover'
                />
            </div>
            <div className="w-full h-[15%] p-4 items-center">
                <h2 className="text-xl font-bold text-teal-900 text-left">
                    {venueName}
                </h2>
                <div onClick={(e) => {
                    e.stopPropagation();
                }}>
                   <Rating id={`${venueName} Rating`}
                name={`${venueName} Rating`}
                data-testid={`${venueName} Rating`}
                value={ratingValue}
                onChange={(e, newValue) => {
                    setRatingValue(newValue)
                    if(onRatingChange && newValue!=null) onRatingChange(newValue)
                }}/> 
                </div>
                
            </div>
        </InteractiveCard>
    );
}
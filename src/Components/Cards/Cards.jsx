import React from 'react';

// css
import './Cards.css'

//components
import { CardsData } from '../../Data/data';
import Card from './Card';

const Cards = () => {
    return (
        <div className='Cards'>
            {
                CardsData?.map((item)=>(
                     <div key={item.id} className='CardContainer'>
                        <Card 
                        title={item.title}
                        color={item.color}
                        barValue={item.barValue}
                        value={item.value}
                        icon={item.icon}
                        series={item.series}
                        />
                     </div>
                ))
            }
        </div>
    );
};

export default Cards;
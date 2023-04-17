import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

//components
import Update from '../Update/Update';


// css
import './RightSide.css';

const RightSide = () => {
    return (
        <div className='rightSide'>
            <div>
                <h1>Updates</h1>
                <Update />
            </div>
            <div>
                <h1>Customer Review</h1>
                <CustomerReview />
            </div>
        </div>
    );
};

export default RightSide;
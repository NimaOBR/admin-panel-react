import React from 'react';

// instagram id : nemavo; thankyou

//components
import Cards from '../Cards/Cards';
import  BasicTable  from '../Table/BasicTable.jsx';

//css
import './MainDash.css'

const MainDash = () => {
    return (
        <div className='MainDash'>
            <h1 className='dashboard'>Dashboard</h1>
            <Cards />
            <BasicTable />
        </div>
    );
};

export default MainDash;
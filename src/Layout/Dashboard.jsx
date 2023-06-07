import React from 'react';

const Dashboard = () => {
    return (
        <div className='grid grid-rows-3 grid-flow-col '>
            <div class=" bg-slate-500 row-span-3 ...">
                01
            </div>
            <div class=" bg-orange-200 row-span-2 col-span-2 ...">
                02
            </div>
        </div>
    );
};

export default Dashboard;
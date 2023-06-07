import React from 'react';
import ClsCard from '../../componant/clsCard/ClsCard';

const Class = () => {
    // const [class, setClass] = useStat([]);

    // useEffect(() => {
    //     fetch('')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // console.log(data);
    //             setClass(data);
    //         })
    // }, [])
    
    return (
        <div className="mx-auto m-10 ">
            <h1 className="text-5xl text-center font-bold pb-5">All Class</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10'>
                <ClsCard></ClsCard> <ClsCard></ClsCard> <ClsCard></ClsCard> <ClsCard></ClsCard> <ClsCard></ClsCard> <ClsCard></ClsCard> <ClsCard></ClsCard> <ClsCard></ClsCard> <ClsCard></ClsCard>
            </div>

        </div>
    );
};

export default Class;
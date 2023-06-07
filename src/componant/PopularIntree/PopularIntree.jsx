import { useEffect, useState } from "react";
import ItreeItems from "../IntreeItems/ItreeItems";


const PopularIntree = () => {
     const [popularIntree, setPopularIntree] = useState([]);

    useEffect(() => {
        fetch('')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setPopularIntree(data);
            })
    }, [])
    return (
        <div className="text-center mt-10 mb-10 ">
            <h1 className="text-5xl font-bold pb-5">Popular Instructors</h1>
            <p className="text-2xl font-bold">there are most best teacher</p>
             <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10">
                {/* {
                    popularIntree.map( intree =>  <ItreeItems intree={intree} ></ItreeItems>)
                } */}
               <ItreeItems></ItreeItems><ItreeItems></ItreeItems><ItreeItems></ItreeItems><ItreeItems></ItreeItems><ItreeItems></ItreeItems><ItreeItems></ItreeItems>
             </div>
            
        </div>
    );
};

export default PopularIntree;
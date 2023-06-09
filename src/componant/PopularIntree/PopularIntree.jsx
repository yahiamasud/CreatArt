import { useEffect, useState } from "react";
import PItreeItems from "../PIntreeItems/PItreeItems";

const PopularIntree = () => {
    
     const [popularIntree, setPopularIntree] = useState([]);

    useEffect(() => {
        fetch('https://assignment-server-12-tau.vercel.app/Instructors')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setPopularIntree(data.slice(0, 6));
            })
    }, [])
    return (
        <div className="text-center  m-5 mt-10 mb-10 ">
            <h1 className="text-5xl font-bold pb-5 uppercase">Popular Instructors</h1>
            <p className="text-2xl font-bold mb-5 pb-10">there are most best teacher</p>
             <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10">
                {
                    popularIntree.map( (popular,index) => <PItreeItems key={popular._id} popular={popular}></PItreeItems>)
                }
             </div>
            
        </div>
    );
};

export default PopularIntree;
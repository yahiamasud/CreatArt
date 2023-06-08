import { useEffect, useState } from "react";
import PClassCardItems from "../PClassCardItems/PClassCardItems";


const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);
    useEffect(() => {
        fetch('https://assignment-server-12-tau.vercel.app/Class')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setPopularClass(data.slice(0, 6));
            })
    }, [])
    return (
        <div className=" mt-10">
            <div className="text-center">
            <h1 className="text-5xl font-bold mt-20 pb-5 uppercase">Popular Class</h1>
            <p className="text-2xl font-bold mb-5 pb-10">there are most best Class</p>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {
                    popularClass.map(popularC => <PClassCardItems popularC={popularC}></PClassCardItems>)
                }
            </div>

        </div>
    );
};

export default PopularClass;
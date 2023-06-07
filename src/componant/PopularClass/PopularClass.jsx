import ClassCardItems from "../ClassCardItems/ClassCardItems";


const PopularClass = () => {
    // const [popularClass, setPopularClass] = useStat([]);

    // useEffect(() => {
    //     fetch('')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // console.log(data);
    //             setPopularClass(data);
    //         })
    // }, [])
    return (
        <div className="text-center mt-10">
            <h1 className="text-5xl font-bold pb-5">Popular Class</h1>
            <p className="text-2xl font-bold">there are most best Calss</p>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                <ClassCardItems></ClassCardItems><ClassCardItems></ClassCardItems><ClassCardItems></ClassCardItems> <ClassCardItems></ClassCardItems><ClassCardItems></ClassCardItems><ClassCardItems></ClassCardItems>
            </div>

        </div>
    );
};

export default PopularClass;
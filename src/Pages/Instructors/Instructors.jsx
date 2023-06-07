import React from 'react';

const Instructors = () => {

    // const [instructors, setInstructors] = useStat([]);

    // useEffect(() => {
    //     fetch('')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // console.log(data);
    //             setInstructors(data);
    //         })
    // }, [])
    return (
        <div className='mx-auto m-10'>
            <h1 className='text-center text-5xl font-bold mb-10'>All Instructors</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;
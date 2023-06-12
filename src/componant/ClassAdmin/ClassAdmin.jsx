
const ClassAdmin = ({ data }) => {
    // this is the data loader params and show
    console.log(data);
    const {name,image,price,available,seats,_id} = data
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>AvailableSite</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td >{name}</td>
                            <td>{price}</td>
                            <td>{seats}</td>
                            <td><button className="btn btn-disabled btn-warning">addClass</button></td>
                            <td><button className="btn btn-secondary">Deleted</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClassAdmin;
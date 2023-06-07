
const ClsCard = () => {
    return (
        <div>
             <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       className:- Shoes!
                        <div className="badge badge-secondary">Price:-NEW</div>
                    </h2>
                    <p>instretorName:- If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      {/* <link to='/Class'><button className='btn btn-success'>Details</button></link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClsCard;
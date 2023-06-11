import { useRouteError } from "react-router-dom";
import imgEorr from '../../public/visuals-JpTY4gUviJM-unsplash (1).jpg'
import './Error.css'

const Error = () => {
    const error = useRouteError();
    return (
        <div className="bg-rad-200 text-center">
            <div className="m-5 p-6" >
                <img className="text-center w-50 EorroIMge mx-auto" src={imgEorr} alt="" />
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error;
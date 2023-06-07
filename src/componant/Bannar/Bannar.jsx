import img from '../../../public/jamie-street-qWYvQMIJyfE-unsplash.jpg';
import img1 from '../../../public/kelly-sikkema-rFOS3-Ns8q8-unsplash.jpg';
import img2 from '../../../public/philippe-oursel-LO_fVYFD5_Y-unsplash (1).jpg';
import img3 from '../../../public/thom-holmes-mSU1oHjFtSs-unsplash.jpg';
import './Bannar.css'
const Bannar = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img} className="w-full photoB opacity-80 " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold text-white mb-5'>Explore the Extraordinary</h1>
                            <p className='text-1xl font-bold text-white '>Uncover the World's Hidden Wonders and Unforgettable Experiences</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full photoB opacity-80" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold mb-5 text-white '>Ignite Your Creativity</h1>
                            <p className='text-1xl font-bold text-white '>Discover Inspiration, Techniques, and Tools to Fuel Your Imagination</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img2} className="w-full photoB opacity-80" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold  text-white mb-5'>Elevate Your Style</h1>
                            <p className='text-1xl font-bold text-white'>Unlock Your Fashion Potential with Trendsetting Tips and Timeless Elegance</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img3} className="w-full photoB opacity-80" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold mb-5 text-white '>Taste the Adventure</h1>
                            <p className='text-1xl font-bold text-white '>Indulge in Culinary Delights and Embark on a Gastronomic Journey</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Bannar;
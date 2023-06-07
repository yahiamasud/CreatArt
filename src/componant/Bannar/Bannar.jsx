import img from '../../../public/png-transparent-error-404-404-error-thumbnail.png';
import './Bannar.css'
const Bannar = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img}className="w-full photoB opacity-5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold '>items all</h1>
                            <p className='text-1xl font-bold'>Love to Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, suscipit commodi labore hic eius quibusdam libero nesciunt in, amet minus quos eos velit itaque aliquam, quaerat sed odit repellat quam.</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <img src={img}className="w-full photoB opacity-5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold '>items all</h1>
                            <p className='text-1xl font-bold'>Love to Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, suscipit commodi labore hic eius quibusdam libero nesciunt in, amet minus quos eos velit itaque aliquam, quaerat sed odit repellat quam.</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <img src={img}className="w-full photoB opacity-5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold '>items all</h1>
                            <p className='text-1xl font-bold'>Love to Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, suscipit commodi labore hic eius quibusdam libero nesciunt in, amet minus quos eos velit itaque aliquam, quaerat sed odit repellat quam.</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <img src={img}className="w-full photoB opacity-5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold '>items all</h1>
                            <p className='text-1xl font-bold'>Love to Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, suscipit commodi labore hic eius quibusdam libero nesciunt in, amet minus quos eos velit itaque aliquam, quaerat sed odit repellat quam.</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
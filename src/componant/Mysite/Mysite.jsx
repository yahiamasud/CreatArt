import imgs from "/public/philippe-oursel-LO_fVYFD5_Y-unsplash (1).jpg"

const Mysite = () => {
    return (
       <div>
        <h1 className="text-center text-5xl font-bold mt-10">School images in Photoshop</h1>
        <p className="text-center text-2xl font-bold p-5">Select the head you want to replace using a selection tool such as the Pen Tool</p>
         <div className="hero my-10 mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={imgs} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Unleash Your Creativity: Explore the World of Art!</h1>
            <p className="py-6">Diverse Art Forms: Showcase a variety of art forms such as painting, sculpture, photography, digital art, and more, to highlight the broad spectrum of creativity.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Mysite;
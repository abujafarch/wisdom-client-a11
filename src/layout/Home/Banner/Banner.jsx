

const Banner = () => {
    return (
        <div className="w-full h-screen">
            <div className="h-full">
                <img className="w-full object-cover h-full" src="https://i.ibb.co/Bzn9BL8/alfons-morales-ylswjsy7stw-unsplash.jpg" />
            </div>
            <div className="absolute top-0 h-full w-full">
                <div className="h-full relative">
                    <img className="h-full object-cover  opacity-90 w-full" src="https://i.ibb.co/9vFypp4/banner-img.png" />
                    <img className="absolute bottom-16 w-[200px] opacity-20 left-16" src="https://i.ibb.co/hZbgff7/Animation-1715360123720.gif" />
                </div>
                <div className="absolute top-1/2 px-5 max-w-[800px] sm:left-1/3 sm:-translate-x-1/2 -translate-y-1/2">
                    <p className="text-lg tracking-widest font-inter text-[#36ad68] font-semibold">EXPLORE, DISCOVER, GROW</p>
                    <h1 className="sm:text-6xl sm:leading-[70px] text-4xl leading-[40px] h-max bg-clip-text text-transparent bg-[url('https://i.ibb.co/SKtz0HF/mick-haupt-Oyg7y-E80h0k-unsplash.jpg')] bg-center bg-contain mb-10 font-bold font-wisdom">Your Gateway to Infinite Perception</h1>
                    <p className="font-inter text-[#666666] font-medium text-lg">Step into Illuminate, where the brilliance of literature awaits. Dive into a world of endless possibilities, where each page holds the key to discovery. Let Illuminate be your guiding light on the path to knowledge and inspiration.</p>
                    <button className="bg-[#36ad68] mt-8 text-white text-lg font-inter font-medium px-5 py-3 rounded-[30px]">Borrow Books</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
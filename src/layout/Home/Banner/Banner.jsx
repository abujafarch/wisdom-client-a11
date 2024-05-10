

const Banner = () => {
    return (
        <div className="w-full h-screen">
            <div className="h-full">
                <img className="w-full object-cover h-full" src="https://i.ibb.co/Bzn9BL8/alfons-morales-ylswjsy7stw-unsplash.jpg" />
            </div>
            <div className="absolute top-0 h-full">
                <div className="h-full relative">
                    <img className="h-full object-cover w-full" src="https://i.ibb.co/9vFypp4/banner-img.png" />
                    <img className="absolute bottom-16 w-[200px] opacity-20 left-16" src="https://i.ibb.co/hZbgff7/Animation-1715360123720.gif" />
                </div>
                <div className="absolute">

                </div>
            </div>
        </div>
    );
};

export default Banner;
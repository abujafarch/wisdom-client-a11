const TopReaders = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-7 sm:mt-12 md:mt-20 px-3 md:px-5">
            <h1 className="text-center font-wisdom text-3xl sm:text-4xl font-bold">Top Readers</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5 sm:mt-10">
                <div className="flex items-center w-full h-[200px]">
                    <img className="h-full w-1/2 rounded-l-md object-cover" src="https://i.ibb.co/7kskL1R/photo-1536337005238-94b997371b40-q-80-w-1000-auto-format-fit-crop-ixlib-rb-4-0.jpg"  />
                    <div className="bg-[#36ad68] w-1/2 rounded-r-md p-3 h-full">
                        <h3 className="text-lg font-inter font-medium text-white">Kwame Boateng</h3>
                        <p className="font-inter text-white">Class: IX</p>
                        <p className="font-inter  text-white">Roll: 12</p>
                    </div>
                </div>
                <div className="flex items-center w-full h-[200px]">
                    <img className="h-full w-1/2 rounded-l-md object-cover" src="https://i.ibb.co/9t9L7Fd/360-F-552948967-rf-Wk-VCstu3t9yp-Snpt2-Ze-PVnuqoi6-D6o.jpg"  />
                    <div className="bg-[#36ad68] w-1/2 rounded-r-md p-3 h-full">
                        <h3 className="text-lg font-inter font-medium text-white">Aisha Sharma</h3>
                        <p className="font-inter text-white">Class: XII</p>
                        <p className="font-inter text-white">Roll: 04</p>
                    </div>
                </div>
                <div className="flex items-center w-full h-[200px]">
                    <img className="h-full w-1/2 rounded-l-md object-cover" src="https://i.ibb.co/FmTPjnF/certificate-8696601-1280.jpg"  />
                    <div className="bg-[#36ad68] w-1/2 rounded-r-md p-3 h-full">
                        <h3 className="text-lg font-inter font-medium text-white">Divya Desai</h3>
                        <p className="font-inter text-white">Class: XI</p>
                        <p className="font-inter text-white">Roll: 09</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopReaders;
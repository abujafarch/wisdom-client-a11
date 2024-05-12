import Rating from "react-rating";

const BookDetails = () => {
    return (
        <div className="max-w-[1200px] md:px-5 px-3 mx-auto mt-40">
            <div className="flex flex-col md:flex-row gap-5">
                <img className="md:h-[600px] object-cover" src="https://i.ibb.co/gyYz1rL/81zp-Coy-YYy-L-AC-UF894-1000-QL80.jpg" />
                <div className="space-y-2">
                    <p className="text-xl font-medium font-inter">Book Name: Pet Sematary</p>
                    <p className="font-inter text-lg text-[#7e7e7e]">by Stephen King</p>
                    <p className="font-inter font-medium text-lg ">Category: Horror</p>
                    <p className="font-inter font-medium text-lg ">Quantity: 234</p>
                    <div>
                        <Rating
                            initialRating={3.7}
                            readonly
                        />
                    </div>
                    <button className="bg-[#36ad68] px-5 py-2 rounded-sm font-inter text-lg font-medium text-white">Borrow</button>
                    <p className="font-inter"><span className="font-semibold">Summary:</span> Louis Creed, bathed in moonlight, stood on the edge of the burial ground, shovel in hand. Each scoop of earth whispered of buried memories and looming consequences. Driven by grief, he dug deeper, ignoring ominous warnings. The scent of decay mingled with his desperation as he sought to defy death's grip. But as he toiled, a voice of caution echoed in his mind, hinting at the darkness lurking beneath the surface. Ignoring the warnings, Louis pressed on, consumed by his obsession. In this haunting moment, the boundary between life and death blurred, setting in motion a chain of chilling events.</p>
                </div>
            </div>
            <div className="mt-5">
                <p className="font-inter"><span className="font-semibold">Description:</span> Pet Sematary by Stephen King is a chilling exploration of grief and the unfathomable depths of human desperation. Set in a rural town, it unveils a sinister burial ground with the power to bring the dead back to life, albeit twisted and malevolent. As the Creed family grapples with loss, they are drawn into a dark abyss where the line between life and death blurs. King's evocative prose and relentless suspense grip readers, pulling them into a nightmarish journey where the cost of tampering with the natural order becomes horrifyingly clear. Pet Sematary is a haunting tale that lingers long after its final page.</p>
            </div>
        </div>
    );
};

export default BookDetails;
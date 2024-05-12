const Modal = ({ setOpenModal }) => {
    return (

        <div className="transition-all">
            <div className="fixed top-0 left-0 z-30 w-full min-h-screen bg-[#00000027]">

            </div>
            <div className="p-10 z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-black">
                <h2 className="text-5xl font-inter font-bold">Hello there </h2>
                <input type="datetime-local" />
                <button onClick={() => setOpenModal(false)}>CLose</button>
            </div>
        </div>

    );
};

export default Modal;
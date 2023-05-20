

function Offers() {
    return (
        <div className="h-[200px] lg:h-[400px] relative my-16 bg-slate-700 bg-banner3 bg-cover bg-center ">
            <div className="w-full h-full bg-[rgba(162,86,255,0.58)]"></div>
            <div className=" h-full absolute top-[20%] lg:top-[30%] left-0">
                <div className="w-[80%] mx-auto">
                    <h2 className="text-white font-bold text-xs lg:text-xl">Only For You</h2>
                    <div className=" w-10 lg:w-20 h-1 bg-slate-700 mt-2"></div>
                    <h1 className="text-white text-xl lg:text-5xl font-bold leading-tight mt-3">Enjoy a <span className="text-purple-700 bg-white p-1">20% off</span> discount on all educational toys for a limited time! </h1>
                </div>
            </div>
        </div>
    )
}

export default Offers

import Image from "next/image"

const Hero = () => {
    return (
        <div className="bg-gradient-to-t from-gray-50 via-red-300 to-purple-100 rounded-br-3xl -mt-24">
            <div className="flex items-center md:flex-row flex-col container mx-auto px-10 gap-20 py-20 ">
                <div className="md:py-40 pt-40 pb-5  flex items-start flex-col justify-center">
                    <h1 className="lg:text-[69px] text-4xl lg:leading-[88px] leading-[50px] font-semibold ">Every order<br /> fulfilled,
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600"> on time.</span></h1>
                    <h2 className="py-8 max-w-4xl ">Eliminate overstocking and under-stocking with CleverBook. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
                    </h2>
                    <div >
                        <div className="flex gap-3 group/bg h-min">
                            <div className="group inline-block rounded-full border-red-400 hover:border-red-400 border-[2px] h-min hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#" >
                                <button className="block rounded-full px-8 py-3 text-sm font-medium bg-transparent transition-all ease-linear duration-300 group-hover:bg-gradient-to-br from-red-300 via-red-400 to-purple-300" >
                                    <span className="bg-clip-text text-black group-hover:text-white transition-all ease-linear duration-300">  Get started with CleverBook</span>
                                </button>
                            </div>
                            <div className="hidden sm:flex">
                                <Image className="mt-4 group-hover/bg:scale-105 transition-transform ease-linear duration-200" alt=" " height={200} width={200} src={'/crestBtnImg.svg'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image alt="" src={'/crestImg.svg'} width={400} height={400} className="w-full h-full" />
                </div>
            </div>
        </div >
    )
}

export default Hero
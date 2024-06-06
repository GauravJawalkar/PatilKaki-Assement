import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    return (
        <header className="body-font bg-transparent backdrop-filter backdrop-blur sticky top-0 z-50">
            <div className="container mx-auto px-10 flex flex-wrap p-3 flex-row max-lg:justify-between items-center">
                <a className="flex title-font font-medium items-center text-gray-900  max-lg:mb-0 ">
                    <span className="ml-3 max-lg:ml-0 text-2xl bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600 font-bold">CleverBooks</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center max-lg:hidden">
                    <a className="mr-5 hover:text-red-400 cursor-pointer">Product</a>
                    <a className="mr-5 hover:text-red-400 cursor-pointer">Pricing</a>
                    <a className="mr-5 hover:text-red-400 cursor-pointer">Indusrty</a>
                    <a className="mr-5 hover:text-red-400 cursor-pointer">Customer Stories</a>
                    <a className="mr-5 hover:text-red-400 cursor-pointer">About</a>
                    <a className="mr-5 hover:text-red-400 cursor-pointer">Blog</a>
                </nav>
                <button className="inline-flex items-center  py-1 px-3 focus:outline-none  rounded bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600 mt-4 md:mt-0 mr-5 hover:text-black transition-all ease-linear duration-500 max-lg:hidden">Login
                </button>
                <button className="inline-flex items-center bg-gradient-to-br from-red-400 via-red-300 to-purple-300 py-3 px-5 focus:outline-none hover:text-white hover:bg-gradient-to-l rounded-full text-black mt-4 md:mt-0 transition-all ease-linear duration-200 max-lg:hidden">Talk to Us
                </button>


                <button className="hidden max-lg:flex"><RxHamburgerMenu className="text-2xl" />
                </button>
            </div>
        </header>
    )
}

export default Navbar
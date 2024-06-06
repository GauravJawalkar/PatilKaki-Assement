import { LuClipboardList, LuReplaceAll } from "react-icons/lu";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CgShutterstock } from "react-icons/cg";


const data = [
    {
        icon: <LuClipboardList className="text-6xl text-red-500" />,
        title: "What to order ",
        desc: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
    {
        icon: <IoBagRemoveOutline className="text-6xl" />,
        title: "When to order",
        desc: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
    {
        icon: <CgShutterstock className="text-6xl" />,
        title: "How much to stock",
        desc: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
    {
        icon: <LuReplaceAll className="text-6xl" />,
        title: "Where to place",
        desc: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
]

const Problem = () => {
    return (
        <div className=' container mx-auto px-10'>
            <div className='flex items-center justify-center  py-5'>
                <h1 className='md:text-4xl text-3xl text-center font-bold'>Four key questions answered by CleverBooks</h1>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 py-20'>

                {
                    data.map(({ icon, title, desc }) => {
                        return (
                            <div key={Math.floor(Math.random())} className="bg-purple-100 p-5 rounded-2xl mr-4">
                                {icon}
                                <div className="flex items-start justify-center flex-col py-3">
                                    <div className=" py-4">
                                        <h1 className="text-2xl font-semibold line-clamp-1">{title}</h1>
                                    </div>
                                    <p className="text-base line-clamp-3">{desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </div>
    )
}

export default Problem
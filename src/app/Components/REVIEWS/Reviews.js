"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Reviews = () => {
    return (
        <div className='container mx-auto py-16 px-10'>
            <div className='flex items-center justify-center xl:flex-row flex-col gap-10 px-10'>
                <div className=' lg:max-w-2xl max-w-full'>
                    {/* Review DESCRIPTION */}
                    <div className='py-5' >
                        <p className='leading-[1.8]'>
                            As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.
                            While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.
                        </p>
                    </div>

                    {/* Reviewer DETAILS */}
                    <div className='flex items-center justify-between py-5'>
                        <div className='flex gap-4 items-center justify-center'>
                            <div>
                                <img
                                    alt="" height={200} width={200}
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-16 rounded-full object-cover"
                                />
                            </div>
                            <div >
                                <h1 className='text-xl font-semibold'>Kirti Goel</h1>
                                <h2>Co-counder, P-TAL</h2>
                            </div>
                        </div>
                        <div>
                            <img
                                alt="" height={200} width={200}
                                src="https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_1280.png"
                                className="size-16 rounded object-cover"
                            />
                        </div>
                    </div>

                    {/* Prev and Next BUTTONS */}
                    <div className='flex gap-5 pb-5'>
                        <button ><CiCircleChevLeft className='h-10 w-10' /></button>
                        <button><CiCircleChevRight className='h-10 w-10' /></button>
                    </div>

                    {/* Additional Info */}
                    <div className='flex items-center justify-center xl:justify-start gap-10 pt-10'>
                        <div className='bg-purple-100 py-5 px-8 rounded-xl text-center '>
                            <h1 className='md:text-5xl sm:text-3xl text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600 '>&gt; 95%</h1>
                            <p className="line-clamp-1">Demand Fulfilment</p>
                        </div>
                        <div className='bg-purple-100 py-5 px-8 rounded-xl text-centerpy-2'>
                            <h1 className='md:text-5xl sm:text-3xl text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600'>&lt; 3%</h1>
                            <p>Complaints</p>
                        </div>
                    </div>

                </div>
                <div >
                    <img className='w-full h-auto rounded-xl' src={'/review1.webp'} />
                </div>
            </div>
        </div >

    )
}

export default Reviews
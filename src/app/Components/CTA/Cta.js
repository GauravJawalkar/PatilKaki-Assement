import React from 'react'

const Cta = () => {
    return (
        <div className='container mx-auto py-10 px-10'>
            <div className='bg-gradient-to-br from-red-300 via-red-400 to-purple-300 rounded-3xl'>
                <div className='flex items-center justify-center py-16 flex-col'>
                    <h1 className='sm:text-5xl text-4xl py-10 font-semibold text-white text-center px-2'>You can grow faster than you think!</h1>
                    <p className='max-w-2xl text-center text-white px-5'>Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
                    <button className='bg-black text-white px-6 py-3 rounded-full my-10'>Get Started with Crest</button>
                </div>
            </div>
        </div>
    )
}

export default Cta
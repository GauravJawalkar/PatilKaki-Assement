/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'


const ProblemTarget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);



    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };
    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
    };

    return (
        <div className='container mx-auto py-10 px-10'>
            <div className='flex items-center justify-center  py-14'>
                <h1 className='md:text-4xl text-3xl text-center font-bold'>Four key questions answered by CleverBooks</h1>
            </div>

            <div className='py-10 grid  lg:grid-cols-2 grid-cols-1 gap-10 items-center flex-row'>
                {/* Div First Side */}
                <div>
                    <div className='py-8 border border-y-gray-700 border-x-white'>
                        <button className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600 ' onClick={toggleVisibility}>Accurate Demand Forecasting</button>


                        <p className={`leading-[1.8]  ${isVisible ? 'flex' : 'hidden'}`}>Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts dont: trends, real-time market signals, promotional activities, and even logistics disruptions.
                        </p>
                    </div>

                    <div className='py-8 border border-y-gray-700 border-x-white'>
                        <button className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600 ' onClick={toggleVisibility1}>Accurate Demand Forecasting</button>


                        <p className={`leading-[1.8]  ${isVisible1 ? 'flex' : 'hidden'}`}>Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts dont: trends, real-time market signals, promotional activities, and even logistics disruptions.
                        </p>
                    </div>

                    <div className='py-8 border border-y-gray-700 border-x-white'>
                        <button className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600 ' onClick={toggleVisibility2}>Accurate Demand Forecasting</button>


                        <p className={`leading-[1.8]  ${isVisible2 ? 'flex' : 'hidden'}`}>Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts dont: trends, real-time market signals, promotional activities, and even logistics disruptions.
                        </p>
                    </div>


                    <div className='py-8 border border-y-gray-700 border-x-white'>
                        <button className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-red-400 to-purple-600 ' onClick={toggleVisibility3}>Accurate Demand Forecasting</button>


                        <p className={`leading-[1.8]  ${isVisible3 ? 'flex' : 'hidden'}`}>Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts dont: trends, real-time market signals, promotional activities, and even logistics disruptions.
                        </p>
                    </div>


                </div>
                {/* Div First Side */}
                <div className='bg-gradient-to-br from-red-600 via-red-400 to-purple-600 rounded-xl h-full w-full flex items-center justify-center'>
                    <div className='py-10 px-5 '>
                        <img alt='' src={`${toggleVisibility ? 'stocks.webp' : 'stocks2.webp'}  `} className='h-full' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProblemTarget
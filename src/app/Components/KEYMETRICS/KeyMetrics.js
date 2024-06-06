"use client"
import { IoLogoJavascript } from "react-icons/io5";
import { RiHtml5Line, RiTailwindCssFill } from "react-icons/ri";
import { FaDigitalOcean, FaLinode, FaNodeJs, FaReact, FaYoutube } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiVercel } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


const brands = [
    {
        id: 1,
        icon: <RiHtml5Line className="text-8xl text-center" />
    },
    {
        id: 2,
        icon: <RiTailwindCssFill className="text-8xl" />
    },
    {
        id: 3,
        icon: <IoLogoJavascript className="text-8xl" />
    },
    {
        id: 4,
        icon: <FaReact className="text-8xl" />
    },
    {
        id: 5,
        icon: <SiNextdotjs className="text-8xl" />
    },
    {
        id: 6,
        icon: <FaYoutube className="text-8xl" />
    },
    {
        id: 7,
        icon: <SiMongodb className="text-8xl" />
    },
    {
        id: 8,
        icon: <FaNodeJs className="text-8xl" />
    },
    {
        id: 9,
        icon: <SiVercel className="text-8xl" />
    },
    {
        id: 10,
        icon: <FaDigitalOcean className="text-8xl" />
    },
    {
        id: 11,
        icon: <FaLinode className="text-8xl" />
    },
    {
        id: 12,
        icon: <VscGithub className="text-8xl" />
    },

]

const KeyMetrics = () => {
    return (
        <div className="container mx-auto py-16 px-10 z-10">
            <div className="flex items-center justify-center gap-8">
                <Swiper slidesPerView={8} spaceBetween={0} freeMode={true} loop={true} grabCursor={true}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: true,
                    }}
                    centeredSlides={true}
                    speed={400}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay, FreeMode, Pagination]} className="mySwiper ">
                    {brands.map(({ id, icon }) => {
                        return (
                            < SwiperSlide key={id}>
                                <span >{icon}</span>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div >
    )
}

export default KeyMetrics
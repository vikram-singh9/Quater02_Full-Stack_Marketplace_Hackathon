import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const About = () => {
    return (
        <>
            <section>
                <div className='py-12 text-[#2A254B] mt-2'>
                    <div className='my-12'>
                        <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>
                            A brand built on the love of craftsmanship, <br /> quality and outstanding customer service
                        </h1>
                    </div>

                    <div className='flex flex-col md:flex-row gap-8 mt-[200px]'>
                        <div className='w-full md:w-1/2 h-auto px-4 md:px-12 py-8 flex flex-col justify-between'>
                            <div>
                                <h1 className='text-xl md:text-2xl'>
                                    From a studio in London to a global brand with <br /> over 400 outlets
                                </h1>
                                <h1 className='py-6 text-base md:text-lg'>
                                    When we started Avion, the idea was simple. Make high-quality furniture <br /> affordable and available for the mass market.
                                </h1>
                                <h1 className='text-sm md:text-base'>
                                    Handmade and lovingly crafted furniture and homeware is what we live, <br /> breathe, and design, so our Chelsea boutique became the hotbed for the <br /> London interior design community.
                                </h1>
                            </div>
                            <div className='my-10'>
                                <button className='bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]'>
                                    Get in touch
                                </button>
                            </div>
                        </div>

                        <div className='w-full md:w-1/2 h-auto'>
                            <Image
                                src={'/images/blend.png'}
                                height={800}
                                width={800}
                                alt='chair'
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-8 mt-12'>
                        <div className='w-full md:w-1/2 h-auto'>
                            <Image
                                src={'/images/gul.png'}
                                height={800}
                                width={800}
                                alt='chair'
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <div className='w-full md:w-1/2 h-auto px-4 md:px-12 py-8 flex flex-col justify-between'>
                            <div>
                                <h1 className='text-xl md:text-2xl'>
                                    From a studio in London to a global brand with <br /> over 400 outlets
                                </h1>
                                <h1 className='py-6 text-base md:text-lg'>
                                    When we started Avion, the idea was simple. Make high-quality furniture <br /> affordable and available for the mass market.
                                </h1>
                                <h1 className='text-sm md:text-base'>
                                    Handmade and lovingly crafted furniture and homeware is what we live, <br /> breathe, and design, so our Chelsea boutique became the hotbed for the <br /> London interior design community.
                                </h1>
                            </div>
                            <div className='my-10'>
                                <button className='bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]'>
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
                        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold">
                            What makes our brand different
                        </h1>

                        <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
                            <div className="flex flex-col w-full md:w-1/4 p-4 rounded-lg">
                                <TbTruckDelivery size={30} className="text-[#2A254B]" />
                                <p className="py-4 font-semibold">Next day as standard</p>
                                <p>Order before 3pm and get your order the next day as standard.</p>
                            </div>

                            <div className="flex flex-col w-full md:w-1/4 p-4 rounded-lg">
                                <IoIosCheckmarkCircleOutline size={30} className="text-[#2A254B]" />
                                <p className="py-4 font-semibold">Made by true artisans</p>
                                <p>Hand-crafted goods made with real passion and craftsmanship.</p>
                            </div>

                            <div className="flex flex-col w-full md:w-1/4 p-4 rounded-lg">
                                <MdOutlinePriceChange size={30} className="text-[#2A254B]" />
                                <p className="py-4 font-semibold">Unbeatable prices</p>
                                <p>For our material and quality, you won&rsquo;t find better prices anywhere.</p>
                            </div>

                            <div className="flex flex-col w-full md:w-1/4 p-4 rounded-lg">
                                <LuSprout size={30} className="text-[#2A254B]" />
                                <p className="py-4 font-semibold">Recycled packaging</p>
                                <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-full h-[444px]  bg-cover bg-center flex justify-center items-center"
                        style={{
                            backgroundImage: "url('/images/back.png')",
                        }}
                    >
                        <div className='mt-[200px] w-full'>
                            <form action="" className='flex flex-col md:flex-row items-center justify-center w-full'>
                                <input
                                    type="text"
                                    placeholder="your@email.com"
                                    className="p-4 bg-[#F9F9F9] w-[350px] md:w-[354px] h-[56px] outline-none mb-4 md:mb-0 md:mt-0 mt-6"
                                />
                                <button className='p-2 bg-[#2A254B] text-white w-[200px] md:w-[118px] h-[56px]'>
                                    Signup
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

import { Button, Carousel } from 'flowbite-react'
import React from 'react'

function Banner() {
    return (
        <div className='h-[400px] sm:h-[500px] xl:h-[600px]'>
            <Carousel slideInterval={5000}>
                <div className="h-full flex items-center relative bg-banner1 bg-bottom bg-cover">
                    <div className="absolute h-full w-full top-0 left-0 right-0 bg-gradient-to-r from-[rgba(0,0,0,.6)] to-transparent -z-[1]"></div>
                    <div className='w-full md:w-[60%] mx-auto'>
                        <h2 className='text-white text-xl font-bold mb-2'> Most fun for kid's</h2>
                        <div className="w-16 h-1 bg-purple-500"></div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl my-4 font-extrabold text-white lg:w-[60%]'>A World To Explore</h1>
                        <p className='lg:w-[60%] text-slate-200'>Active toys for smart and active kids. Bring fun and  non-stop learning for your little ones.</p>
                        <Button color='purple' className='mt-4'>View more</Button>
                    </div>
                </div>
                <div className="h-full flex items-center relative bg-banner2 bg-bottom bg-cover">
                    <div className="absolute h-full w-full top-0 left-0 right-0 bg-gradient-to-r from-[rgba(0,0,0,.6)] to-transparent -z-[1]"></div>
                    <div className='w-full md:w-[60%] mx-auto'>
                        <h2 className='text-white text-xl font-bold mb-2'>Favorite Store</h2>
                        <div className="w-16 h-1 bg-purple-500"></div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl my-4 font-extrabold text-white lg:w-[60%]'>The Ultimate Toy store</h1>
                        <p className='lg:w-[60%] text-slate-200'>
                            Delivering smile with toys. Get your unbeatable fun and learning experience with our creative toys.
                        </p>
                        <Button color='purple' className='mt-4'>View more</Button>
                    </div>
                </div>
                <div className="h-full flex items-center relative bg-banner3 bg-bottom bg-cover">
                    <div className="absolute h-full w-full top-0 left-0 right-0 bg-gradient-to-r from-[rgba(0,0,0,.6)] to-transparent -z-[1]"></div>
                    <div className='w-full md:w-[60%] mx-auto'>
                        <h2 className='text-white text-xl font-bold mb-2'> Big fun for kid's</h2>
                        <div className="w-16 h-1 bg-purple-500"></div>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl my-4 font-extrabold text-white lg:w-[60%]'>Extraordinary Learning Toys</h1>
                        <p className='lg:w-[60%] text-slate-200'>
                            Premium toy for the genuine start. The best place to your buy dream toys. We provide toys for all age kids.
                        </p>
                        <Button color='purple' className='mt-4'>View more</Button>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner

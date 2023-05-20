
import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Reviews() {
    return (
        <div className='py-16'>
            <h1 className='text-center text-2xl lg:text-4xl font-bold text-slate-700'>Customer Review</h1>
            <div className=" w-20 lg:w-28 h-1 mx-auto bg-purple-700 mt-3 mb-12"></div>
            <Swiper
                slidesPerView={window.innerWidth < 768 ? 1 : 2}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="px-8"
            >
                <SwiperSlide>
                    <figure className=" p-8 text-center">
                        <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p className="text-base lg:text-2xl italic font-medium text-gray-900">"I purchased several educational toys for my kids, and they absolutely love them! The toys are not only entertaining but also promote learning and development.!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- John Doe</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>

                    <figure className=" p-8 text-center">
                        <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p className="text-base lg:text-2xl italic font-medium text-gray-900">"I'm amazed by the quality and educational value of the toys I bought from this website. My child has shown a great interest in learning."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- Jane Smith</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>

                    <figure className=" p-8 text-center">
                        <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p className="text-base lg:text-2xl italic font-medium text-gray-900">"The educational toys I ordered exceeded my expectations. They are well-designed, durable, and have helped my child improve their cognitive and problem-solving skills!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/handsome-young-man-with-arms-crossed-white-background_23-2148222620.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- Sarah Johnson</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className=" p-8 text-center">
                        <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                        <blockquote>
                            <p className="text-base lg:text-2xl italic font-medium text-gray-900">"As an educator, I'm always on the lookout for engaging educational materials. This website offers a fantastic selection of toys that make learning fun and interactive.!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-smiling-friendly-polite-assist-customer-white-background_176420-45257.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=sph" />
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <cite className="pr-3 font-medium text-gray-900">-- Michael Thompson</cite>
                            </div>
                        </figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Reviews

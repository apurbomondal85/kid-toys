
import { FaFacebook, FaGithub, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-100 border px-8 pt-12 pb-6 mt-12 overflow-hidden">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="basis-[40%]">
                            <img src={logo} className="h-10" alt="Logo" />
                            <p className='my-2 text-gray-600 font-semibold'>Unlocking the joy of learning through educational toys. Our mission is to provide engaging and innovative toys that inspire curiosity, creativity, and a love for learning.</p>
                            <p className="text-xl font-semibold text-gray-900">Address:</p>
                            <p className="mt-2 text-gray-600 flex items-center gap-4"><FaPhone></FaPhone>+999 543 5325</p>
                            <p className="mt-2 text-gray-600 flex items-center gap-4"><FaMailBulk></FaMailBulk>kidtoys@gmail.com</p>
                            <div className="flex items-center gap-6 mt-8">
                                <Link><FaFacebook className='text-2xl transition-all duration-300 hover:text-purple-700'></FaFacebook></Link>
                                <Link><FaInstagram className='text-2xl transition-all duration-300 hover:text-purple-700'></FaInstagram></Link>
                                <Link><FaGithub className='text-2xl transition-all duration-300 hover:text-purple-700'></FaGithub></Link>
                                <Link><FaTwitter className='text-2xl transition-all duration-300 hover:text-purple-700'></FaTwitter></Link>
                            </div>
                        </div>
                        <div className="basis-[60%] mt-4 lg:mt-0 grid md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h2 className="mb-3 lg:mb-6 mt-4 lg:mt-0 text-base whitespace-nowrap font-semibold text-gray-900 uppercase">Customer Service</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-semibold">
                                    <li className="mb-2 lg:mb-4">
                                        <Link>
                                            Shipping and Delivery
                                        </Link>
                                    </li>
                                    <li className="mb-2 lg:mb-4">
                                        <Link>
                                            Order Tracking
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Returns and Exchanges
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 mt-8 lg:mt-0 text-base font-semibold text-gray-900 uppercase">Legal</h2>
                                <ul className="font-medium text-gray-600">
                                    <li className="mb-4">
                                        <Link>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Terms and Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 mt-8 lg:mt-0 text-sm font-semibold text-gray-900 uppercase">Subscribe Now</h2>
                                <div className="text-gray-600">
                                    <p>Stay connected and never miss out on the latest updates from KID TOYS.</p>
                                    <div className="flex lg:flex-col lg:gap-3 mt-4">
                                        <input type="email" className=' focus:ring-0 border-purple-700 focus:border-purple-700 rounded-none lg:rounded-md' placeholder='Email address...' />
                                        <Button gradientMonochrome="purple" className='py-1 w-full rounded-none lg:rounded-md'>Subscribe</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" text-center mt-8">
                        <span className="text-sm text-gray-500 sm:text-center">© 2023 Apurbo Mondal. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

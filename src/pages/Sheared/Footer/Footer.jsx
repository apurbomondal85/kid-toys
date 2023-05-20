
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

function Footer() {
    return (
        <div>
            <footer class="bg-gray-100 border px-8 pt-12 pb-6 mt-12 overflow-hidden">
                <div class="mx-auto w-full max-w-screen-xl">
                    <div class="md:flex gap-8">
                        <div class="basis-[40%]">
                            <img src={logo} class="h-10 mr-3" alt="Logo" />
                            <h2 className="text-xl text-gray-900 mt-6 font-semibold">About Us</h2>
                            <p className='my-2 text-gray-600 font-semibold'>Unlocking the joy of learning through educational toys. Our mission is to provide engaging and innovative toys that inspire curiosity, creativity, and a love for learning.</p>
                            <div className="flex items-center gap-6 mt-8">
                                <Link><FaFacebook className='text-2xl transition-all duration-300 hover:text-purple-700'></FaFacebook></Link>
                                <Link><FaInstagram className='text-2xl transition-all duration-300 hover:text-purple-700'></FaInstagram></Link>
                                <Link><FaGithub className='text-2xl transition-all duration-300 hover:text-purple-700'></FaGithub></Link>
                                <Link><FaTwitter className='text-2xl transition-all duration-300 hover:text-purple-700'></FaTwitter></Link>
                            </div>
                        </div>
                        <div class="basis-[60%] grid grid-cols-2 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-base font-semibold text-gray-900 uppercase">Customer Service</h2>
                                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link>
                                            Shipping and Delivery
                                        </Link>
                                    </li>
                                    <li class="mb-4">
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
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                                <ul class="font-medium text-gray-600">
                                    <li class="mb-4">
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
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Subscribe Now</h2>
                                <div className="text-gray-600">
                                    <p>Stay connected and never miss out on the latest updates from KID TOYS.</p>
                                    <div className="space-y-2 mt-4">
                                        <input type="email" className=' focus:ring-0 border-purple-700 focus:border-purple-700 rounded-md' placeholder='Email address...' />
                                        <Button gradientMonochrome="purple" className='py-1 w-full'>Subscribe</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" text-center mt-8">
                        <span class="text-sm text-gray-500 sm:text-center">© 2023 Apurbo Mondal. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

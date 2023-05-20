
import { Accordion } from 'flowbite-react'
import React from 'react'

function FAQSection() {
    return (
        <div data-aos-offset="200" data-aos-delay="50" data-aos="fade-up" className="py-16 ">
            <h1 className='text-center text-2xl lg:text-4xl font-bold text-slate-700'>Frequently Asked Questions</h1>
            <div className="w-28 h-1 mx-auto bg-purple-700 mt-3 mb-12"></div>
            <div className='flex flex-col lg:flex-row gap-6'>
                <div className="basis-[50%]">
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title>
                                What age range are the educational toys suitable for?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Our educational toys cater to a wide range of age groups, from toddlers to pre-teens. Each toy's age recommendation is clearly stated in the product description to ensure you find the right toys for your child's developmental stage.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Are your toys safe for children?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, safety is our top priority. All our toys undergo rigorous testing and meet the highest safety standards. They are made from non-toxic materials and are designed to be age-appropriate and durable for long-lasting play.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Do you offer international shipping?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, we offer international shipping to many countries. During the checkout process, you can enter your shipping address to check if we deliver to your location. Please note that additional shipping fees and import taxes may apply depending on your country's regulations.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
                <div className="basis-[50%]">
                    <Accordion>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Can I track my order?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Absolutely! Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package through our website or the courier's tracking system.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Do you offer gift-wrapping services?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, we offer gift-wrapping services for a small additional fee. During the checkout process, you can select the gift-wrapping option and add a personalized message to make your gift extra special. Let us take care of the presentation while you focus on the joy of giving!
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Are your toys suitable for children with special needs?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    We strive to provide inclusive play experiences. While some of our toys may be suitable for children with special needs, we recommend reviewing the product descriptions and consulting with therapists or professionals who can assess the specific needs of the child.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        </div >
    )
}

export default FAQSection

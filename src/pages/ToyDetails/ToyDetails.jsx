
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom'

function ToyDetails() {
    const loaderToy = useLoaderData();
    const { _id, name, picture, price, seller, rating, category, description } = loaderToy;
    return (
        <div className='py-16'>
            <h2 className='text-center font-bold text-xl text-purple-700'>Single Toy Details</h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-slate-700"></div>
            <h1 className="text-center text-4xl font-bold text-slate-700 mt-4">{name}</h1>
            <div className="mt-16 bg-gray-100 flex items-center gap-8 h-[300px] md:h-[400px] lg:h-[500px]">
                <div className='basis-[50%] h-full'>
                    <img src={picture} className='w-full h-full object-fill' alt="toy-image" />
                </div>
                <div className="basis-[50%] space-y-4 border-l-4 border-purple-700 px-4">
                    <h1 className="text-3xl font-bold text-slate-700 whitespace-nowrap">{name}</h1>
                    <p className="text-gray-500 font-semibold w-full lg:w-[80%]">{description}</p>
                    <p className="text-gray-500 font-semibold w-full lg:w-[80%]"><strong>Seller</strong> : {seller}</p>
                    <p className="text-gray-500 font-semibold w-full lg:w-[80%]"><strong>Price</strong> : ${price}</p>
                    <p className="text-gray-500 font-semibold w-full lg:w-[80%]"><strong>Category</strong> : {category}</p>
                    <div className="flex items-center gap-2 mb-4">
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar className='text-yellow-300'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                            fullSymbol={<FaStar className='text-yellow-300'></FaStar>}
                        />
                        <span>({rating})</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToyDetails

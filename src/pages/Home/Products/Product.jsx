
import React from 'react'
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { Button } from 'flowbite-react';

function Product({ product }) {
    const { name, picture, seller, email, price, category, rating, quantity, description } = product;
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow transition-all ease-in-out duration-500 hover:shadow-lg cursor-pointer">
            <img className="h-[250px] object-fill w-full rounded-t-lg" src={picture} alt="product image" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 whitespace-nowrap">{name}</h5>
                <p className="mb-3 text-xl font-semibold text-gray-700">Price : ${price}</p>
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
                <Button gradientMonochrome="purple">View details</Button>
            </div>
        </div>
    )
}

export default Product

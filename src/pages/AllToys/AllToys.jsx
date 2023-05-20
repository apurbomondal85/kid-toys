
import { Button, Table } from 'flowbite-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import {useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../../Provider/AuthProvider'

function AllToys() {
  const {user} = useContext(AuthContext)
  const loadProducts = useLoaderData()
  const search = useRef('')
  const [products, setProducts] = useState(loadProducts)
  const navigate = useNavigate();

  const handleSearchBtn = () => {
    const searchValue = search.current.value;
    if (searchValue) {
      fetch(`https://toys-server-omega.vercel.app/searchByName/${searchValue}`)
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        })
    }
  }

  const handleDetailsBtn = (id) => {
    if (!user) {
      toast('You have to log in first to view details', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => navigate(`/toy-details/${id}`), 2000);
      return;
    }
    navigate(`/toy-details/${id}`)
  }

  return (
    <div className='py-16'>
      <div>
        <h2 className='text-center font-bold text-xl text-purple-700'>Your favorite Products</h2>
        <div className="w-20 h-1 mx-auto mt-2 bg-slate-700"></div>
        <h1 className="text-center text-4xl font-bold text-slate-700 mt-4">Search Your Toy</h1>
        <div className="flex justify-center items-center mt-8">
          <input type="text" className='lg:w-[300px] border border-purple-700 rounded-l-md focus:ring-0 focus:border-purple-700 py-3 px-3' ref={search} name="search" id="search" placeholder='Search Toy...' />
          <Button onClick={handleSearchBtn} gradientMonochrome='purple' className='rounded-none rounded-r-md py-2 px-4'>Search</Button>
        </div>
      </div>
      <div className="mt-12">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Seller Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Toy Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                products?.map(product => <tr key={product._id} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {product?.seller}
                  </th>
                  <td className="px-6 py-4">
                    {product?.name}
                  </td>
                  <td className="px-6 py-4">
                    {product?.category}
                  </td>
                  <td className="px-6 py-4">
                    ${product?.price}
                  </td>
                  <td className="px-6 py-4">
                    {product?.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <Button onClick={() =>handleDetailsBtn(product?._id)} gradientMonochrome='purple'>View Details</Button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default AllToys

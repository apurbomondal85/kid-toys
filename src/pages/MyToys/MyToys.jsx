
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Label, Modal } from 'flowbite-react';
import './MyToys.css'
import Swal from 'sweetalert2';
import useTitle from '../DynamicTitle/DynamicTitle';

function MyToys() {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])
    const [shows, setShows] = useState(false);
    const [id, setId] = useState();
    const [sort, setSort] = useState('ascending');
    useTitle("My Toys")

    // get toy using email
    useEffect(() => {
        if (user?.email) {
            fetch(`https://toys-server-7vpmq3lll-apurbomondal85.vercel.app/username?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setToys(data);
                }).catch(err => console.log(err))
        }
    }, [user])

    const updateBtn = (_id) => {
        setShows(true);
        setId(_id)
    }

    // update toy property
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateValue = { price, quantity, description };

        fetch(`https://toys-server-7vpmq3lll-apurbomondal85.vercel.app/toys/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Success',
                        'Success updated value',
                        'success'
                    )
                    const remaining = toys.filter(toy => toy._id !== id);
                    const update = toys.find(toy => toy._id === id);
                    update.price = price;
                    update.quantity = quantity;
                    update.description = description;
                    setToys([update, ...remaining])
                    form.reset();
                    setShows(false)
                }
            })
    }

    // delete toys
    const deleteBtn = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-server-7vpmq3lll-apurbomondal85.vercel.app/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining)
                        }
                    })
            }
        })
    }

    useEffect(() => {
        if (user?.email) {
            fetch(`https://toys-server-7vpmq3lll-apurbomondal85.vercel.app/sortPrice?sortOrder=${sort}&email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setToys(data);
                })
        }
    }, [sort])



    return (
        <div className='py-16'>
            <h1 className="text-center text-4xl font-bold text-slate-700 mt-4">My All Toys</h1>
            <div className="w-20 h-1 mx-auto mt-2 bg-purple-700"></div>
            <div className="flex items-center justify-center gap-4 mt-4 lg:mt-8">
                <Button gradientMonochrome="purple" onClick={() => setSort("descending")}>Descending</Button>
                <Button gradientMonochrome="teal" onClick={() => setSort("ascending")}>Ascending </Button>
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
                                toys?.map(toy => <tr key={toy._id} className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {toy?.seller}
                                    </th>
                                    <td className="px-6 py-4">
                                        {toy?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {toy?.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${toy?.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {toy?.quantity}
                                    </td>
                                    <td className="flex items-center gap-4 px-6 py-4">
                                        <FaTrash onClick={() => deleteBtn(toy?._id)} className='text-red-600 text-xl cursor-pointer'></FaTrash>
                                        <FaEdit onClick={() => updateBtn(toy?._id)} className='text-purple-700 text-xl cursor-pointer'></FaEdit>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                show={shows}
                size="md"
                popup={true}
                onClose={() => setShows(false)}
                className='modal'
            >
                <Modal.Header />
                <div className=" bg-white">
                    <Modal.Body className='w-full'>
                        <form onSubmit={handleUpdate} className='w-full mx-auto p-8 mt-8 shadow-md'>
                            <div className="grid md:grid-cols-2 md:gap-6 my-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="price" id="price" autoComplete='none' className="input peer" required />
                                    <label htmlFor="price" className="label">Price</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="quantity" id="quantity" autoComplete='none' className="input peer" required />
                                    <label htmlFor="quantity" className="label">Quantity</label>
                                </div>
                            </div>
                            <div>
                                <textarea id="message" rows="4" name='description' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write Description..."></textarea>
                            </div>
                            <Button type='submit' gradientMonochrome='purple' className='py-1 px-6 mt-6 shadow-lg'><span className='text-xl'>Update</span></Button>
                        </form>
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    )
}

export default MyToys

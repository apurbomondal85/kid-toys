
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { Button } from 'flowbite-react'

function AddToys() {
    const { user } = useContext(AuthContext)

    const handleAddToy = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const toyInfo = { name, picture, seller, email, price, category, rating, quantity, description };

        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                }
            })
    }

    return (
        <div className='py-16'>
            <h2 className='text-center font-bold text-4xl text-slate-700'>Add your favorite toys</h2>
            <div className="w-20 h-1 bg-purple-700 mx-auto mt-2"></div>
            <form onSubmit={handleAddToy} className='w-full md:w-[80%] lg:w-[70%] mx-auto p-8 mt-8 shadow-md'>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" id="name" autoComplete='none' className="input peer" required />
                        <label htmlFor="name" className="label">Toy Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="url" name="picture" id="picture" autoComplete='none' className="input peer" placeholder=" " required />
                        <label htmlFor="picture" className="label">Toy Picture</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 my-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="seller" id="seller" defaultValue={user?.displayName ? user.displayName : ''} className="input peer" required />
                        <label htmlFor="seller" className="label">Seller Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" defaultValue={user?.email ? user.email : ''} className="input peer" placeholder=" " required />
                        <label htmlFor="email" className="label">Username</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 my-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="price" id="price" autoComplete='none' className="input peer" required />
                        <label htmlFor="price" className="label">Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <select id="countries" name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option defaultValue="Math Toys">Math Toys</option>
                            <option defaultValue="Engineering toys">Engineering toys</option>
                            <option defaultValue="Language Toys">Language Toys</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="rating" id="rating" autoComplete='none' className="input peer" required />
                        <label htmlFor="rating" className="label">Rating</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantity" id="quantity" autoComplete='none' className="input peer" required />
                        <label htmlFor="quantity" className="label">Quantity</label>
                    </div>
                </div>
                <div>
                    <textarea id="message" rows="4" name='description' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write Description..."></textarea>
                </div>
                <Button type='submit' gradientMonochrome='purple' className='py-1 px-6 mt-6 shadow-lg'><span className='text-xl'>Add Toy</span></Button>
            </form>
        </div>
    )
}

export default AddToys

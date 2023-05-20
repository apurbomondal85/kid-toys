
import React from 'react'

function Gallery() {
    return (
        <div className='py-16'>
            <h2 className='text-base lg:text-xl font-bold mb-2 text-center text-purple-700'>Gallery</h2>
            <div className=" w-12 lg:w-20 h-1 mx-auto bg-slate-700"></div>
            <h1 className='text-2xl lg:text-4xl font-bold text-slate-800 text-center mt-4'>Explore Our Collection</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                <div className="grid gap-4">
                    <div className='h-[400px] shadow-md cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full max-w-full image-scale rounded-lg" src="https://img.freepik.com/premium-photo/number-wood-block-cubes-learning-mathematic-education-math-concept_622428-988.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://img.freepik.com/free-photo/set-kid-toys-white-shelf_53876-144954.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://img.freepik.com/free-photo/set-toy-medical-equipment_114579-31099.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://img.freepik.com/premium-photo/santa-s-helpers-carries-christmas-balls_1401-3742.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-[400px] max-w-full image-scale rounded-lg" src="https://img.freepik.com/free-photo/world-science-day-assortment-with-chemistry-tubes_23-2149112628.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://img.freepik.com/free-vector/flat-christmas-toys-collection_23-2149157348.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-[400px] max-w-full image-scale rounded-lg" src="https://img.freepik.com/free-vector/tourism-hiking-concept_1284-12995.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://img.freepik.com/free-vector/collection-toys-children-nursery-room_74855-16830.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.2.857259792.1672064733&semt=ais" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJsdPaYjpZUw2wg_kEwNN-jaaiGCrjgc8pIA&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAffwxLeseg-yNAFjZw6JS7LA2EHpl4tnZQ&usqp=CAU" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-[400px] max-w-full image-scale rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DyyWfPXQ5tr7wOj-WskXQVOxHeVJp9dI8A&usqp=CAU" alt="" />
                    </div>
                    <div className='shadow-md relative cursor-pointer overflow-hidden rounded-lg group'>
                        <img className="h-full w-full image-scale rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TegjvcePAD8FjtvJXpz9BzLwQwIA-Zktdg&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery


import { Button } from 'flowbite-react'
import errorImg from '../../assets/images/error.jpg'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className="w-[80%] lg:w-[50%] mx-auto">
            <img src={errorImg} alt="error image" className='h-[500px] w-full' />
            <Link to="/"><Button gradientMonochrome="purple"><FaArrowLeft className='mr-2'></FaArrowLeft>Back</Button></Link>
        </div>
    </div>
  )
}

export default Error

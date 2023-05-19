
import { Button } from 'flowbite-react'
import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

function Login() {
    const { login, google } = useContext(AuthContext)
    const [error, setError] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                navigate(from)
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });
    }

    const loginGoogle = () => {
        google().then(result => {
            const user = result.user;
            setError('')
            navigate(from)
        }).catch(err => {
            setError(err.code)
        })
    }


    return (
        <div className='h-full py-16 flex items-center justify-center'>
            <form onSubmit={handleLogin} className='lg:w-[500px] p-8 shadow-md shadow-purple-300 rounded-lg border-t border-purple-300'>
                <h1 className='text-center text-4xl font-bold text-slate-700'>Login Now</h1>
                <div className="w-16 h-1 bg-purple-700 mx-auto mb-8 mt-2"></div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                {
                    error && <p className='mb-3 text-red-600'>Something wrong {error}</p>
                }
                <Button type='submit' gradientMonochrome="purple">Register</Button>
                <p className="mt-3">Create an account? <Link to='/register' className='underline text-purple-500'>Register now</Link></p>
                <div className="my-4 flex items-center gap-3">
                    <div className="w-full h-[1px] bg-purple-700"></div>
                    <p className='text-2xl text-slate-700'>Or</p>
                    <div className="w-full h-[1px] bg-purple-700"></div>
                </div>
                <div className="flex justify-center"><Button onClick={loginGoogle} color='white' className='border border-purple-300 rounded-2xl font-bold'><FcGoogle className='text-2xl text-left'></FcGoogle> <span className='font-bold mx-8'>Login with google</span></Button></div>
            </form>
        </div>
    )
}

export default Login

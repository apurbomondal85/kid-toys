
import { Avatar, Button, Navbar } from 'flowbite-react'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
    const user = true
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='py-4 sticky top-0 left-0 border-b'
        >
            <Navbar.Brand to="/">
                <img
                    src={logo}
                    className="mr-3 h-10 sm:h-14"
                    alt="toys Logo"
                />
            </Navbar.Brand>
            <div className="flex md:order-2 gap-4">
                {
                    user ? <>
                        <Avatar
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded={true}
                            bordered={true}
                            color="purple"
                            title={user.displayName ? user.displayName : 'User name'}
                        />
                        <Button color="dark" className='py-1 px-6 font-bold'>LogOut</Button>
                    </>
                        : <Button  gradientMonochrome="purple" className='py-1 px-6 font-bold'>Login</Button>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className=''>
                <Link to="/">
                    Home
                </Link>
                <Link to="/all-toys">
                    All Toys
                </Link>
                {
                    user ? <>
                        <Link to="/my-toys">Ny Toys</Link>
                        <Link to="/add-toy">Add Toy</Link>
                    </> : ''
                }
                <Link to="/blog">
                    Blog
                </Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

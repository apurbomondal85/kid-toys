
import { Avatar, Button, Navbar } from 'flowbite-react'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'

function NavBar() {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='py-4 sticky top-0 left-0 border-b z-50 rounded-none'
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
                            img={user.photoURL}
                            rounded={true}
                            bordered={true}
                            color="purple"
                            title={user.displayName ? user.displayName : 'User name'}
                        />
                        <Button color="dark" onClick={handleLogOut} className='py-1 px-6 font-bold'>LogOut</Button>
                    </>
                        : <Link to="/login"><Button gradientMonochrome="purple" className='py-1 px-6 font-bold'>Login</Button></Link>
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
                        <Link to="/my-toys">My Toys</Link>
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

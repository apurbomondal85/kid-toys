
import { Avatar, Button, Navbar } from 'flowbite-react'
import logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'

function NavBar() {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const activeLink = ({ isActive }) => isActive ? "text-purple-700" : "";

    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='py-4 sticky top-0 left-0 border-b z-40 rounded-none'
        >
            <Navbar.Brand to="/">
                <img
                    src={logo}
                    className="mr-3 h-10 sm:h-14"
                    alt="toys Logo"
                />
            </Navbar.Brand>
            <div className="flex items-center md:order-2 gap-4">
                {
                    user ? <>
                        <Avatar
                            className='hidden lg:block'
                            img={user.photoURL}
                            rounded={true}
                            bordered={true}
                            color="purple"
                            title={user?.displayName ? user?.displayName : 'User name'}
                        />
                        <Button color="dark" onClick={handleLogOut} className='py-1 px-6 font-bold hidden lg:block'>LogOut</Button>
                    </>
                        : <NavLink to="/login"><Button gradientMonochrome="purple" className='py-1 px-6 font-bold hidden lg:block'>Login</Button></NavLink>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='flex flex-col lg:flex-row items-center text-center'>
                {
                    user ? <>
                        <Avatar
                            className='block lg:hidden'
                            img={user.photoURL}
                            rounded={true}
                            bordered={true}
                            color="purple"
                            title={user?.displayName ? user?.displayName : 'User name'}
                        />
                        <Button color="dark" onClick={handleLogOut} className='py-1 px-6 font-bold block lg:hidden mt-2'>LogOut</Button>
                    </>
                        : <NavLink to="/login"><Button gradientMonochrome="purple" className='py-1 px-6 font-bold block lg:hidden'>Login</Button></NavLink>
                }
                <NavLink to="/" className={activeLink}>
                    Home
                </NavLink>
                <NavLink to="/all-toys" className={activeLink}>
                    All Toys
                </NavLink>
                {
                    user ? <>
                        <NavLink to="/my-toys" className={activeLink}>My Toys</NavLink>
                        <NavLink to="/add-toy" className={activeLink}>Add Toy</NavLink>
                    </> : ''
                }
                <NavLink to="/blog" className={activeLink}>
                    Blog
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

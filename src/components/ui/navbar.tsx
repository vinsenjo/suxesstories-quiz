import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <nav className='h-max px-4 py-2 fixed top-0 w-full bg-white shadow-md flex'>
            <a href={'/'} className='w-max'>
                <img src={logo} alt='suxestories logo' width={200} height={200} className='w-[100px] lg:w-[200px] ' />
            </a>
        </nav>
    )
}

export default Navbar

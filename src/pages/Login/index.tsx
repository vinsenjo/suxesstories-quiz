const Login = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-neutral'>
            <div className='border-2 border-black p-4 rounded-md flex flex-col text-center gap-2'>
                <h1 className='font-semibold text-xl'>Login</h1>
                <form action="" className='flex flex-col gap-2'>
                    <input className='px-2 py-1 rounded-md border' type="email" placeholder='Email' />
                    <input className='px-2 py-1 rounded-md border' type="password" placeholder='Password' />
                </form>
            </div>
        </div>
    )
}

export default Login

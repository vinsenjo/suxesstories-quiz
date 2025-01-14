import loginImage from "@/assets/login.png"
import { doSignInWithEmailAndPassword } from "@/libs/firebase/auth"
import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSigningIn, setIsSigningIn] = useState(false)

    const onSubmit = async (e: any) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    return (
        <div className='h-screen lg:flex-row flex-col-reverse flex gap-10 items-center justify-center bg-langitTua lg:p-0 px-20'>
            <div className='p-4 rounded-md flex flex-col text-center gap-2 lg:w-max w-full'>
                <h1 className='font-semibold text-2xl'>Sign in to start your session</h1>
                <form onSubmit={onSubmit} className='flex flex-col gap-2 '>
                    <input className='px-2 py-1 neu neu-active rounded-md border ' type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input className='px-2 py-1 rounded-md border neu neu-active' type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit" className="neu neu-active rounded-md bg-primer text-white py-1 hover:bg-second hover:text-black" >Sign in</button>
                </form>
            </div>
            <img src={loginImage} className="w-[400px]  " />
        </div>
    )
}
export default Login

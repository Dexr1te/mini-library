import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router';


const LoginForm = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [authing , setAuthing ] = useState<boolean>(false);  
    const [email , setEmail ] = useState<string>('');  
    const [password , setPassword ] = useState<string>('');  
    const [error , setError ] = useState<string>(''); 

    const signInWithGoogle = async () => {
        setAuthing(true)

        signInWithPopup(auth , new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid)
                navigate('/catalog')
            })
            .catch(error => {
                console.log(error)
                setAuthing(false)
            })
    }

    const signInWithEmail = async () => {
        setAuthing(true);
        setError('')

        signInWithEmailAndPassword(auth , email , password)
        .then(response => {
            console.log(response.user.uid)
            navigate('/catalog')
        })
        .catch(error => {
            console.log(error)
            setError(error.message);
            setAuthing(false)
        })
    }

  return (
    <div className='w-full flex flex-col max-w-[450px] mx-auto bg-[#1a1a1a] p-1'>
        <div className="w-full flex flex-col mb-10 text-white items-center">
            <h3 className='text-4xl font-bold mb-2'>Login</h3>
            <p className='text-lg mb-4'>Welcome Back! Please enter your details.</p>
        </div>

        <div className="w-full flex flex-col mb-6">
            <input 
                type="email" 
                placeholder='Email'
                className='w-full text-white py-2 px-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-1'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder='Password'
                className='w-full text-white py-2 px-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-1'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />

            <div className='w-full flex flex-col mb-4'>
                <button
                    className='w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md py-3 md:py-6'
                    onClick={signInWithEmail}
                    disabled={authing}
                    >
                        Log In With Email and Password
                </button>

                {error && <div className='text-red-500 mb-4'>{error}</div>}

                <div className="w-full flex items-center justify-center relative py-4">
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <p className='text-lg absolute text-gray-500 bg-[#1a1a1a] px-2'>OR</p>
                </div>

                <button 
                    className='w-full bg-white text-black font-semibold rounded-md p-4 text-center flex items-center justify-center mt-4 '
                    onClick={signInWithGoogle}
                    disabled={authing}>
                        Login with Google
                </button>
            </div>

            <div className="w-full flex items-center justify-center mt-10">
                <p className='text-sm font-normal text-gray-400'>
                    Don't have Account? <Link to='/auth/sign-up'className='underline font-semibold text-white'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
import {useState, useRef, useContext} from 'react';
import {Link} from 'react-router-dom';
import auth from './firebase/firebase';
import { AuthContext } from "./Providers/Providers.jsx";
import {signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/outline';

export default function LogIn() {
  const {user, setUser, logIn} = useContext(AuthContext);
  const [showPassword, setshowPassword] = useState(true);
  const emailRef = useRef(null); 
  

  function handleLogin(e) {
    e.preventDefault();
    
    const form = e.target;
    const email =form.email.value;
    const password = form.password.value;
    // Sign it user with the provided email and password
    // signInWithEmailAndPassword(auth,email,password)
    logIn(email,password) 
    .then(res=> {
      form.reset();
      setUser(res.user);
      console.log(res.user);
      alert('signIn success');
    })
  .catch(err=> console.log(err))
  }

 // send reset password requiest
  function forgotPassword() {
    const email = emailRef.current.value;
    if(!email){
      alert('please provide your email')
    };
    sendPasswordResetEmail(auth,email)
    .then(()=> alert('password reset email has been sent'))
    .catch(err=> console.log(err));
  }

  // toggle password
  function togglePassword() {
    setshowPassword(prevState=>!prevState)
  }




  return (
    <div className="hero py-12 bg-base-200">
      <div className="hero-content  w-11/12 mx-auto flex-col">
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold">Login now!</h1>
         </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' ref={emailRef} type="email" placeholder="Enter your email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className='relative'>
                <input type={showPassword ? 'password':'text'} name='password' placeholder="Enter your password" className="input input-bordered w-full" required/>
                { showPassword ?  <EyeIcon onClick={togglePassword} title='show password' className='w-6 h-6 absolute text-gray-500 right-4 top-3'/>: <EyeSlashIcon onClick={togglePassword} title='hide password' className='w-6 h-6 text-gray-500 absolute right-4 top-3'/>} 
              </div>
              <label className="label flex justify-between">
                <span onClick={forgotPassword} className="label-text-alt link link-hover">Forgot password?</span>
               <span className='label-text-alt ms-auto'>New here? <Link className='link link-hover' to='register'>Register</Link></span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

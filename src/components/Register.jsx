import {useState} from 'react';
import {createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from 'firebase/auth'
import auth from './firebase/firebase'
export default function() {

  const [user, setUser] = useState('');
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    setErr('');
    
    console.log(name,email,password)

    if(!/(?=.*[A-Z]).*[A-Z]/.test(password)){
      setErr('Minimum 2 Uppercase letter is required');
      return;
    }else if(!/(?=.*[0-9].*[0-9])/.test(password)){
      setErr('Minimum 2 numbers is required');
      return;
    }else if(!/(?=.*[#?!@$%^&*-])/.test(password)){
      setErr('At least one special character is required')
      return;
    }
    
    createUserWithEmailAndPassword(auth,email,password)
    .then((res)=> {
      setUser(res.user);
      updateProfile(res.user,{displayName:name});
      alert('registation success')
      console.log(res.user);
      sendEmailVerification(res.user)
        .then(()=> {
            alert('Please Verify Yout Email');
          })
      })
    .catch(err=> console.log(err))
  }
  

  return (
    <div className="hero py-12 bg-base-200">
      <div className="hero-content  w-11/12 mx-auto flex-col">
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input type="text" name='name' placeholder="User Name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
              
              <small className='text-red-500'>{err}</small>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

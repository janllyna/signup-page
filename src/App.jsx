import React, {useState} from 'react';
import './App.css';
import './style.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, app, db } from './firebase';
import {setDoc,doc} from "firebase/firestore";

const App = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async(e) => {
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      const user=auth.currentUser;
      console.log(user)
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          email:user.email,
          firstName:fName,
          lastName:lName
        });
      }
      console.log("User Registered Successfully");
    }catch(error){
      console.log(error.message);
    }
    };
  return (
    <div className='Layout'>
      <div className='middleLayout'>
        <div className='signUpDetails'>
          <h2 className='title'>Sign Up</h2>
          <div className='Details'>
            <div className='nameDetails'>
              <form className='firstName'>
              <label htmlFor='fName' id='labelFName'>First Name: </label>
              <input type="text" id='fName' name='fName' placeholder='First Name' onChange={(e)=>setFName(e.target.value)}/>
            </form>
            <form className='lastName'>
              <label htmlFor='lName'>Last Name: </label>
              <input type="text" id='lName' name='lName' placeholder='Last Name' onChange={(e)=>setLName(e.target.value)}/>
            </form>
            </div>
            <form className='emailID'>
              <label htmlFor='ID' id='eID'>Email ID:</label>
              <input type="text" id='ID' name='ID' placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
            </form>
            <form className='Password' id='PwdLabel'>
              <label htmlFor='Pwd'>Password: </label>
              <input type='password' id='Pwd' name='Pwd' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </form>
            <form className='confirmPassword'>
              <label htmlFor='confirmPwd'id=''>Confirm Password:</label>
              <input type='password' id='confirmPwd' name='confirmPwd' placeholder='Confirm Password' onChange={(e)=>setConfirmPwd(e.target.value)}/>
            </form>
          </div>
          <div className='otherOptions'>
            <div className='tc'>
              <form className='tc'>
                <input type='checkbox' />
                <label htmlFor='t&c'>I Accept the Terms of Use & Privacy Policy</label>
              </form>
            </div>
            <div className='alreadyAccount'>
              <a href='' className='login'>
                Already have account? Login
              </a>
            </div>
          </div>
          <div className='actionButtons'>
            <div className='signUpButton'>
              <button className='signUp' onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
            <div className='socialAccount'>
              <button className='socialSignUp'>
                Sign Up with Social Account
              </button>
            </div>
          </div>
        </div>
        <div className='loginImg'>
            <img src={require('./loginimg.jpg')} />
        </div>
      </div>
    </div>
  )
}

export default App

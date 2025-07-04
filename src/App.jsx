import React from 'react';
import './App.css';
import './style.css';

const App = () => {
  return (
    <div className='Layout'>
      <div className='middleLayout'>
        <div className='signUpDetails'>
          <h2 className='title'>Sign Up</h2>
          <div className='Details'>
            <div className='nameDetails'>
              <form className='firstName'>
              <label htmlFor='fName' id='labelFName'>First Name: </label>
              <input type="text" id='fName' name='fName' placeholder='First Name'/>
            </form>
            <form className='lastName'>
              <label htmlFor='lName'>Last Name: </label>
              <input type="text" id='lName' name='lName' placeholder='Last Name'/>
            </form>
            </div>
            <form className='emailID'>
              <label htmlFor='ID' id='eID'>Email ID:</label>
              <input type="text" id='ID' name='ID' placeholder='Email Address'/>
            </form>
            <form className='Password' id='PwdLabel'>
              <label htmlFor='Pwd'>Password: </label>
              <input type='password' id='Pwd' name='Pwd' placeholder='Password' />
            </form>
            <form className='confirmPassword'>
              <label htmlFor='confirmPwd'id=''>Confirm Password:</label>
              <input type='password' id='confirmPwd' name='confirmPwd' placeholder='Confirm Password' />
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
              <button className='signUp'>
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
      </div>
    </div>
  )
}

export default App

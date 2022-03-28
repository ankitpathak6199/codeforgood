import React from 'react'
import './Register.css'

const Register = () => {
    
    return (
        <>
                   <form>
              <h1>Registration</h1>
              <h3>Let's Head Toward's Learning!!!</h3>
                  <label>Name</label>
	<br/>
	<input type = "text" placeholder="Full Name"/>
	<br/>
                  <label>Age</label>
	<br/>
	<input type = "number" placeholder="Age"/>
	<br/>
	<label>City</label>
	<br/>
	<input type = "text" placeholder="City"/>
	<br/>
                  <label>Class</label>
	<br/>
	<input type = "number" placeholder="Ex: 9/10"/>
	<br/>
	<label>Username</label>
	<br/>
	<input type = "text" placeholder="Username"/>
	<br/>
	<label>Password</label>
	<br/>
	<input type = "password" placeholder="Password"/>
	<br/>
	<label>Language</label>
	<br/>
	<select>
	      <option>Select Language</option>
	      <option>English</option>
	      <option>Hindi</option>
	</select>
	<br/>	
	<input type="checkbox" /> I agree to the terms and conditions
	<br/>
	<input type="submit" value="Register" id="button"/>
         </form>
        </>
    )
}

export default Register;

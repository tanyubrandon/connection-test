import { useState } from "react";

const Form = () => {
    const[firstName,setFirstname]=useState('');
    const[lastName,setLastname]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const credential={firstName,lastName, email,password,confirmPassword};

        fetch('http://localhost:8000/credential',{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(credential)
        })
        .then(()=>{
            console.log('crential added.');
        })
    }

    return ( 
        <div className="container">
            <div className="head">
                <hr></hr>
                <h2>Register</h2>
            </div>
            <p>Create an account if you dont have one.</p>
            <form  onSubmit={handleSubmit}>
            <div className="name">
                <input 
                    type="text" 
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(e)=>setFirstname(e.target.value)}
                ></input>
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    required
                    value={lastName}
                    onChange={(e)=>setLastname(e.target.value)}
                ></input>
            </div>
            <input 
                type="text" 
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <input 
                type="password"  
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            ></input>
            <input 
                type="password" 
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                ></input>
            <div id="check">
                <span><input type="checkbox" ></input></span> 
                <label htmlFor="check">I accept all the <b>Terms & Policies</b></label>
            </div>
            <button type="submit">Register Now</button>
            </form>
            {/* <h1>FirstName:{firstName}</h1>
            <h1>LastName:{lastName}</h1>
            <h1>Email:{email}</h1>
            <h1>Password:{password}</h1>
            <h1>ConfirmPassword:{confirmPassword}</h1> */}
        </div>
     );
}
 
export default Form;
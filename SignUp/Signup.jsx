import { useState } from "react"; 
import "../SignUp/Signup.css";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";

const Signup = () => { 
	const [name, setName] = useState(""); 
	const [email, setEmail] = useState(""); 
	const [password, setPassword] = useState(""); 

	const [submitted, setSubmitted] = useState(false); 
	const [error, setError] = useState(false); 

	const handleName = (e) => { 
		setName(e.target.value); 
		setSubmitted(false); 
	}; 

	const handleEmail = (e) => { 
		setEmail(e.target.value); 
		setSubmitted(false); 
	}; 
 
	const handlePassword = (e) => { 
		setPassword(e.target.value); 
		setSubmitted(false); 
	}; 
 
	const handleSubmit = (e) => { 
		e.preventDefault(); 
		if (name === "" || email === "" || password === "") { 
			setError(true); 
		} else { 
			setSubmitted(true); 
			setError(false); 
		} 
	}; 

	const successMessage = () => { 
		return ( 
			<div 
				className="success"
				style={{ 
					display: submitted ? "" : "none", 
				}} 
			> 
				<Alert>User {name} successfully registered!!</Alert> 
			</div> 
		); 
	}; 

	const errorMessage = () => { 
		return ( 
			<div 
				className="error"
				style={{ 
					display: error ? "" : "none", 
				}} 
			> 
		    <Alert> Please enter all the fields</Alert> 
			</div> 
		); 
	}; 

	return ( 
		<div className="signup-form"> 
			<div className="signup-title"> 
				<h1>User Registration</h1> 
			</div> 

			<form> 
				<label className="label">Name</label> 
				<div className="messages"> 
					{errorMessage()} 
					{successMessage()} 
				</div> 
				<input 
					onChange={handleName} 
					className="input"
					value={name} 
					type="text"
				/> <br />

				<label className="label">Email</label> 
				<input 
					onChange={handleEmail} 
					className="input"
					value={email} 
					type="email"
				/> <br />

				<label className="label">Password</label> 
				<input 
					onChange={handlePassword} 
					className="input"
					value={password} 
					type="password"
				/> 

				<button onClick={handleSubmit} className="btn" type="submit"> 
					Register 
				</button> 
                <p className="goToLogin">Already have an account? <Link to = "/login"> Login</Link> </p>
			</form> 
		</div> 
	); 
} 

export default Signup;
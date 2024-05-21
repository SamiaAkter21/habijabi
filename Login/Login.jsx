import { useState } from "react"; 
import "../Login/Login.css";
import { Alert } from "@mui/material";

const Login = () => { 
	const [email, setEmail] = useState(""); 
	const [password, setPassword] = useState(""); 

	const [submitted, setSubmitted] = useState(false); 
	const [error, setError] = useState(false); 

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
		if (email === "" || password === "") { 
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
				<Alert>User successfully logged in!!</Alert> 
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
		<div className="login-form"> 
			<div className="login-title"> 
				<h1>User Login</h1> 
			</div> 
			<div className="messages"> 
				{errorMessage()} 
				{successMessage()} 
			</div> 

			<form>
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
					Login 
				</button> 
			</form> 
		</div> 
	); 
} 

export default Login;
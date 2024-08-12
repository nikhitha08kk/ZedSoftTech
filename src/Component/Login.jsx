import React ,{useState}from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        navigate("/list")
    };

    
  return (
    <div className="login-container">
    <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <button type="submit" className="login-button">Login</button>
    </form>
</div>
  )
}

export default Login
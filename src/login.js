import { useState } from 'react';
import './login.css'

const Login = ({ setFlag }) => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [errorMsg, setErrorMsg] = useState("");

    const loginUser = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                localStorage.clear();
                localStorage.setItem("token", data.token);
                localStorage.setItem("id", data.id);
                if(data.message) {
                    setErrorMsg(data.message)
                } else {
                    setFlag(false);
                }
            })
    }

    return (
        <div className='loginDiv'>
            <input type="text" placeholder='Username' onChange={(e) => setUsername((e.target.value).trim())} /><br />
            <input type="password" placeholder='Password' onChange={(e) => setPassword((e.target.value).trim())} /><br />
            <button type="submit" onClick={loginUser}>Login</button>
            <p className="errorMsg">{errorMsg}</p>
        </div>
    )
}

export default Login;
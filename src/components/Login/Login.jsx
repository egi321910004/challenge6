import style from '../Login/Login.module.css';
import carImage from '../../images/image-bg.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginEmail, LoginGoogle } from '../../config/redux/actions/authAction';
import { useEffect, useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { dataLogin } = useSelector((store) => store.auth);
    
    const handleLogin = async () => {
        const data = await dispatch(LoginGoogle());
        if (data) navigate("/login/landing")
    };

    const handleLoginEmail = () => {
        dispatch(LoginEmail(email, password));
        setTimeout(() => {
            navigate("/login/dashboard")
        }, 1000)
    };

    useEffect(() => {
        if(dataLogin?.email === "admin@admin.com") navigate("/login/dashboard")
        if(dataLogin !== null && dataLogin?.email !== "admin@admin.com") navigate("/login/landing")
    }, []);

  return (
    <>
        <div className={style.container}>
            <div>
                <img src={carImage} alt="car-image" />
            </div>
            <div className={style.inputContainer}>
                <div className={style.logo}></div>
                <div className={style.title}>
                    <h1>Welcome</h1>
                </div>
                <div className={style.inputAccount}>
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder='Contoh: johndee@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={style.inputAccount}>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder='6+ karakter'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className={style.signUpButton}
                    onClick={() => handleLoginEmail()}
                >
                    Sign In
                </button>
                <div 
                    className={style.loginLink}
                    onClick={() => handleLogin()}
                >
                    <p>Login with Google</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;
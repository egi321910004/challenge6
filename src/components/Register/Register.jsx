import style from '../Register/Register.module.css';
import carImage from '../../images/image-bg.png';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterEmail, RegisterGoogle } from '../../config/redux/actions/authAction';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { dataLogin } = useSelector((store) => store.auth)

    const handleRegister = async () => {
        const data = await dispatch(RegisterGoogle());
        alert('Anda berhasil Register!');
    };

    const handleRegisterEmail = () => {
        dispatch(RegisterEmail(email, password));
        alert('Anda berhasil Register!');
    };
    
    useEffect(() => {
        if(dataLogin?.email === "admin@admin.com") navigate("/login/dashboard")
        if(dataLogin !== null && dataLogin?.email !== "admin@admin.com") navigate("/login/landing")
    }, []);

  return (
    <>
        <div className={style.container}>
            <div className={style.backgroundImage}>
                <img src={carImage} alt="car-image" />
            </div>
            <div className={style.inputContainer}>
                <div className={style.logo}></div>
                <div className={style.title}>
                    <h1>Create new Account</h1>
                </div>
                <div className={style.inputAccount}>
                    <label>Email</label>
                    <input
                        type="email"
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className={style.signUpButton}
                    onClick={() => handleRegisterEmail()}
                >
                    Sign Up
                </button>
                <div className={style.loginLink}>
                    <Link to={'/login'}>Already have an account? Login</Link>
                </div>
                <div 
                    className={style.registerGoogle}
                    onClick={() => handleRegister()}
                >
                    <p>Register with Google</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register;
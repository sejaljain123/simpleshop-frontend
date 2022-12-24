import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './Login.css'
import Toast from '../../components/Toast/toast';

const Login = () => {

    const { isAuthenticated , loginState, loading, error } = React.useContext(AuthContext);
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        loginState(formData);
       
        setFormData ({
            username: '',
            password: '',
        });
    };



    return (
        
        <div className='flex justify-center items-center h-screen w-screen left-bg' >
        <div className='flex items-center flex-col text-center w-full h-full justify-center backdrop-blur-sm'>
            <div className='flex flex-col justify-around items-center w-2/3 sm:w-1/2 lg:w-1/4 h-[40vh] drop-shadow-md rounded-md border bg-[#c0dbf4]'>
        <h1 className='text-3xl font-bold text-[#021431]'>Welcome Back!</h1>

        <Input label="Username" name="username" type="text" value={formData.username} onChange={handleChange} />
        <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit} label="Login" />
        </div>
        {error ? <Toast message={error} />:'' }
        {loading ? <Toast message="Loading..." />:'' }
        {isAuthenticated ? <Toast message="Login Successful" />:'' }
       
        </div>
        </div>
    );
};

export default Login;
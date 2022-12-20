import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Login = () => {

    const navigate = useNavigate();
    const { isAuthenticated , login } = React.useContext(AuthContext);
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
        login(formData);
        if(isAuthenticated){
            navigate('/dashboard');
        }
        else{
           alert('Invalid Credentials');
        }
        setFormData ({
            username: '',
            password: '',
        });
    };

    return (
        <div className='flex justify-between items-center h-screen w-screen' >
            <div className='bg-[#1976d2] w-1/2 h-full flex justify-center items-center'>
            <img src="/images/bg.webp" alt="Google Logo" width={500} height= {500} />
            </div>
            <div className='w-1/2 h-full flex justify-center items-center'>
            <div className='flex h-[40vh] justify-around items-center flex-col text-center'>
                <h1>Welcome!!</h1>
            <h3>Enter the credentials </h3>
            <Input label="Username" name="username" type="text" value={formData.username} onChange={handleChange} />
            <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
            <Button type="submit" onClick={handleSubmit} label="Login" />
            </div>
            </div>
        </div>
    );
    };

export default Login;
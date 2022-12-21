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
    
        
        setFormData ({
            username: '',
            password: '',
        });
    };

    



    return (
        
        <div className='flex justify-between items-center h-screen w-screen' >
        <div className='bg-[#8ba8fc] w-1/2 h-full flex justify-center items-center'>
        <img src="/images/bg.webp" alt="Google Logo" width={500} height= {500} />
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <h1 className='text-3xl'>Welcome Back!</h1>
        <div className='flex h-[40vh] items-center flex-col text-center w-2/3 justify-evenly'>
        <Input label="Username" name="username" type="text" value={formData.username} onChange={handleChange} />
        <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit} label="Login" />
        </div>
        </div>
    </div>
    );
};

export default Login;
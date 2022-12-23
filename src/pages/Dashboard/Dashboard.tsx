import { useNavigate } from "react-router-dom";
import Button from '../../components/Button/Button';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1338646661/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-window-display-showcase.jpg?b=1&s=170667a&w=0&k=20&c=IjIyYsOhjFangGZVqki_9YHTtbN3JBFyQs7GXPA_eV0=')" }}>
            <div className="hero-overlay bg-opacity-60"></div>


            <div className="hero-content text-center text-neutral-content">
                <div className="">
                <h1 className="mb-5 text-4xl font-bold">Welcome to Simple Shop </h1>
                    <h1 className="mb-5 text-6xl font-bold">Hello there!</h1>
                    <h1 className="mb-5 text-6xl font-bold">Satish Abhushan Kendra</h1>
                    <p className="mb-5">Pachraha, Gwalior Road, Pachraha, Etawah, 206001, Uttar Pradesh </p> 
                    <Button type="submit" onClick={() => navigate('/invoice')} label="Generate Invoice" />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
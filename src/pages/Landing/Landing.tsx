import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button"


const Landing = () => {
    const navigate = useNavigate();
 return(
    <div className='flex justify-between items-center h-screen w-screen bg-[#8ba8fc]' >
       
         <div className='w-1/2 h-full flex flex-col  justify-center items-center  '>
       
         <div className="rounded-l-full rounded-b-full border-[#8aa6fc] border w-full h-full flex flex-col  items-center bg-white  ">
         <div className="flex justify-end items-center w-full p-8">
            <Button type="submit" label="Login" onClick={()=>(navigate("/login"))}/>
             </div>
            <div className="flex flex-col mt-32 justify-center items-center mt ">
          <h1 className="text-6xl font-bold w-2/3 leading-normal text-[#8ba8fc] mb-8"> Welcome to <br/><span className="text-[#377dff] text-7xl " >Simple Shop</span></h1> 
          <h2 className="text-5xl font-bold w-2/3 mt-8 text-[#83b8ea] leading-normal">The <span className="text-[#2769e4]">all in one tool</span> to manage all your invoices.</h2>
          </div>
          </div>
         </div>
        <img src="/images/landing.png" alt="Google Logo" className="w-1/2 h-full object-cover" />
      
        </div>
 )
}

export default Landing
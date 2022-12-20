

const Landing = () => {
 return(
    <div className='flex justify-between items-center h-screen w-screen bg-[#8ba8fc]' >
       
         <div className='w-1/2 h-full flex flex-col  justify-center items-center '>
         <div className="rounded-full w-full h-2/3 flex flex-col  justify-center items-center  bg-white">
          <h1 className="text-6xl font-bold w-2/3 leading-normal"> Welcome to <br/><span className="text-[#1155cc] text-7xl" >Simple Shop</span></h1> 
          <h2 className="text-5xl font-bold w-2/3 mt-8">The all in one tool to manage all your invoices</h2>
          </div>
         </div>
        <img src="/images/2.png" alt="Google Logo" className="w-1/2 h-full object-cover" />
      
        </div>
 )
}

export default Landing
import React from 'react'
import success from '../assets/icon-success.svg'
import { useNavigate } from 'react-router-dom'
import iconList from '../assets/icon-list.svg'
import UserEmailContext from '../context/UserEmailContext'
import { useContext } from 'react'

function Success() {
    const {userEmail} = useContext(UserEmailContext);

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate("/")
    }
  return (
    <div className='flex justify-center items-center min-h-screen max-md:h-screen bg-gray-800 '>
        <div className='flex bg-white px-10 rounded-3xl max-w-sm py-9 max-md:h-screen max-md:flex max-md:justify-center max-md:items-center max-md:max-w-full max-md:rounded-none'>
            <div className='font-roboto flex  flex-col'>
                <img src={iconList} alt="" className='max-w-11'/>
                <h1 className='text-4xl text-[#242742] font-extrabold mt-5 '>Thanks for Subscribing!</h1>
                <p className='text-[12px] mt-5 font-roboto font-medium'>A conformation email has been sent to <span className='font-bold text-gray-900'>{userEmail}</span>.Please open it and click the button inside to confirm your subscription</p>
                <button 
                onClick={handleSubmit}
                className='w-full  text-white px-3 py-2 bg-[#242742] transition ease-in-out duration-300 rounded-xl hover:bg-gradient-to-r from-[#ff5fd4] hover:to-[#ff5100] hover:shadow-2xl hover:shadow-pink-500 my-5'>Dismiss Message</button>
            </div>
        </div>

    </div>
  )
}

export default Success
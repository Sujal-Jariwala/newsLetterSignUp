import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import iconList from '../assets/icon-list.svg';
import desktopIllustration from '../assets/illustration-sign-up-desktop.svg';
import mobileIllustration from '../assets/illustration-sign-up-mobile.svg';
import UserEmailContext from '../context/UserEmailContext';

function Email() {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const [imageSrc, setImageSrc] = useState(desktopIllustration);
  const navigate = useNavigate();
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const { setUserEmail } = useContext(UserEmailContext);

  const handleSubmit = () => {
    setUserEmail(email);
    if (!email || !validEmail.test(email)) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      navigate("/success"); // Ensure this matches your route configuration
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (validEmail.test(email)) {
      setErrorMsg(false);
    }
  };

  const updateImageSrc = () => {
    if (window.innerWidth < 768) {
      setImageSrc(mobileIllustration);
    } else {
      setImageSrc(desktopIllustration);
    }
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener('resize', updateImageSrc);

    return () => {
      window.removeEventListener('resize', updateImageSrc);
    };
  }, []);

  return (
    <div className='flex justify-center items-center max-md:h-auto min-h-screen bg-gray-800 font-roboto'>
      <div className='flex bg-white rounded-3xl overflow-hidden max-w-4xl max-md:flex-col-reverse max-md:w-[90%] px-8 py-4 max-md:p-0 max-md:justify-center max-md:items-center max-md:h-full'>
        <div className='flex-1 pr-6 ml-10 max-md:m-0'>
          <h1 className='text-5xl font-extrabold mb-6 mt-14 text-[#242742] max-md:font-[30px]'>Stay updated!</h1>
          <p className='mb-6'>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className='space-y-4 mb-8'>
            <div className='flex items-center'>
              <img src={iconList} alt="" className='mr-4' />
              <p>Product discovery and building what matters</p>
            </div>
            <div className='flex items-center'>
              <img src={iconList} alt="" className='mr-4' />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className='flex items-center'>
              <img src={iconList} alt="" className='mr-4' />
              <p>And much more</p>
            </div>
          </div>
          <div className='mb-4'>
            <div className='flex justify-between items-center'>
              <label htmlFor="email" className='block text-sm font-semibold mb-2'>Email Address</label>
              {errorMsg && (
                <span className='text-tomato text-[12px]'>
                  Valid Email required
                </span>
              )}
            </div>
            <input
              onChange={handleEmailChange}
              value={email}
              id="email"
              type='email'
              placeholder='email@company.com'
              className={`px-4 py-3 w-full rounded-lg border-solid focus:border-black focus:border-solid focus:outline-none ${errorMsg ? 'border-2 border-tomato bg-red-200 placeholder:tomato' : 'border'}`}
            />
          </div>
          <button
            onClick={handleSubmit}
            className='bg-[#242742] py-3 rounded-lg w-full text-white font-bold transition ease-in-out duration-300 hover:bg-gradient-to-r from-[#ff5fd4] to-[#ff5100] hover:shadow-2xl hover:shadow-pink-500 '
          >
            Subscribe to monthly newsletter
          </button>
        </div>
        <div className='flex-1 rounded-xl overflow-hidden ml-11 max-md:m-0 max-md:w-full max-md:justify-center max-md:items-center max-md:align-middle'>
          <img src={imageSrc} alt="Illustration" className='object-cover max-w-screen max-md:w-full' />
        </div>
      </div>
    </div>
  );
}

export default Email;
  
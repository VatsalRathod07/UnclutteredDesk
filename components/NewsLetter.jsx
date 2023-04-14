import React, { useRef, useEffect, useState } from 'react';
import { submitNewsLetter } from '../services';

const NewsLetter = () => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const newsletteremailEl = useRef();


  useEffect(() => {
    newsletteremailEl.current.value = window.localStorage.getItem('email');
  }, [])


  const handleNewsLetterEmailSubmission = () => {
    setError(false);

    const { value: email } = newsletteremailEl.current;

    if (!email) {
      setError(true);
      return;
    }

    const newLetterObj = { email };

    if (storeData) {
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('email', email);
    }

    submitNewsLetter(newLetterObj)
      .then((res) => {
        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
  }

  return (
    <div className='background font-signature capitalize'>
      <div className='container mx-auto px-4 py-12 md:py-24 card'>
        <div className='flex flex-col md:flex-col text-center gap-3 items-center justify-center md:justify-between'>
          <h2 className='text-4xl font-extrabold mb-6 md:mb-0'>Subscribe to Our Newsletter</h2>
          <p className='text-sm font-medium mb-6 md:mb-0'>Get the latest news and updates delivered straight to your inbox.</p>
          <form className='flex flex-col md:flex-row items-center'>
            <input type='email' ref={newsletteremailEl} placeholder='Enter your email' className='py-2 px-4 focus:outline-none mb-4 md:mb-0 md:mr-4' />
            <button type='submit' onSubmit={handleNewsLetterEmailSubmission} className='bg-ligthblack-0 text-white py-2 px-4'>Subscribe</button>
          </form>
          {error && <p className="text-xs text-red-500">Please enter valid email</p>}
          {showSuccessMessage && <span className='font-signature text-sm font-semibold text-ligthblack-0 p-1'>Thank you for Subscribe</span>}
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
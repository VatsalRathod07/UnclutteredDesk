import React, { useRef, useEffect, useState } from 'react';
import { submitNewsLetter } from '../services';

const NewsLetter = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const newsletteremailEl = useRef();

  useEffect(() => {
    newsletteremailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsLetterEmailSubmission = () => {
    setError(false);

    const { value: email } = newsletteremailEl.current;

    if (!email || !validateEmail(email)) {
      setError(true);
      return;
    }

    const newLetterObj = { email };

    submitNewsLetter(newLetterObj).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    });
  };

  return (
    <div className="background font-signature capitalize mx-auto container">
      <div className="mx-auto px-4 py-12 md:py-24 card">
        <div className="flex flex-col md:flex-col text-center gap-3 items-center justify-center md:justify-between">
          <h2 className="text-white text-4xl font-extrabold mb-6 md:mb-0">Subscribe to Our Newsletter</h2>
          <p className="text-white text-sm font-medium mb-6 md:mb-0">Get the latest news and updates delivered straight to your inbox.</p>
          <form className="flex flex-col md:flex-row items-center">
            <input type="email" ref={newsletteremailEl} placeholder="Enter your email" className="py-2 px-4 w-72 focus:outline-none mb-4 md:mb-0 md:mr-4" />
            <button
              type="button"
              onClick={handleNewsLetterEmailSubmission}
              className="text-white bg-black border-none outline-none transition ease-in duration-500 px-10 py-2 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          {error && <p className="text-xs text-red-500 bg-white p-1">Please enter a valid email</p>}
          {showSuccessMessage && <span className="font-signature text-sm font-semibold text-darkwhite-0 p-1">You're subscribed</span>}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

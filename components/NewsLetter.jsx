import React from 'react';

export default function App() {
  return (
    <div className='bg-darkwhite-0'>
      <div className='container mx-auto px-4 py-12 md:py-24'>
        <div className='flex flex-col md:flex-col text-center gap-3 items-center justify-center md:justify-between'>
          <h2 className='text-5xl font-signature font-bold mb-6 md:mb-0'>Subscribe to Our Newsletter</h2>
          <p className='text-1xl mb-6 md:mb-0'>Get the latest news and updates delivered straight to your inbox.</p>
          <form className='flex flex-col md:flex-row items-center'>
            <input type='email' placeholder='Enter your email' className='py-2 px-4 focus:outline-none mb-4 md:mb-0 md:mr-4' />
            <button type='submit'className='bg-ligthblack-0 text-white py-2 px-4'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
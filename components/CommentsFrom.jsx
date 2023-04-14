import React, { useRef, useEffect, useState } from 'react';
import { submitComment } from '../services';

const CommentsFrom = ({ slug }) => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();


  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])
  

  const handleCommentSubmission = () =>{
    setError(false);

    const { value:  comment } = commentEl.current;
    const { value:  name } = nameEl.current;
    const { value:  email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;


    if (!comment || !name || !email ) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

   if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
   } else{
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
   }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
  }

  return (
    <div className="p-5 pb-12">

        <h3 className="text-xl mb-1 font-extrabold font-signature">Leave a Reply</h3>
        <p className="text-s text-black mb-4">Your email address will not be published. Required fields are marked <span className='text-red-500'>*</span></p>

        <div className="grid grid-cols-1 gap-4 mb-3">
          <label htmlFor="comment" className="capitalize -mb-1">comment <span className='text-red-500'>*</span></label>
          <textarea ref={commentEl} className="p-2 outline outline-1 outline-gray-300 bg-transparent text-sm w-full h-36" name='comment'/>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 mb-3">
            <label htmlFor="name" className="capitalize -mb-1">Name <span className='text-red-500'>*</span></label>
            <input ref={nameEl} type="text" name="name" className="p-2 outline outline-1 outline-gray-300 bg-transparent text-sm "/>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-3">
            <label htmlFor="email" className="capitalize -mb-1">Email <span className='text-red-500'>*</span></label>
            <input ref={emailEl} type="email" name="email" className="p-2 outline outline-1 outline-gray-300 bg-transparent text-sm "/>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-3 mt-3 capitalize">
          <div>
            <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
            <label htmlFor="storeData" className='text-sm font-medium cursor-pointer text-ligthblack-0 ml-2'>save my details for next time</label>
          </div>
        </div>

        {error && <p className="text-xs text-red-500">Please fill the required fields.</p>}
        {showSuccessMessage && <span className="text-sm font-bold text-ligthblack-0 font-signature">Your comment has been submmited !<br /><span className="text-xs font-medium">once it has been approved, it will appear below</span></span>}
        <div className="mt-5">
          <button 
            type='button' 
            onClick={handleCommentSubmission}
            className="bg-blue-600 text-white hover:bg-blue-700 border-none outline-none transition ease-in duration-500 text-lg px-10 py-3 cursor-pointer">
            Post Comment
          </button>
        </div>

    </div>
  )
}

export default CommentsFrom
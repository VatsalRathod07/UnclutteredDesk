import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, [])


  return (
    <>
      {comments.length > 0 && (
        <div className="p-7 pb-12 mb-7">
          <h3 className="text-xl mb-7 font-extrabold pb-4 font-signature">
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.ceatedAt} className="border-b border-gray-100 mb-4 pb-4">

              {/* <div className='flex'>
              <img className="rounded-full w-16 h-16" src="https://wallpapers.com/images/featured/j793ekqt0iue1qs4.jpg" alt="" />
              <p className="mb-4 text-start">
                <span className="font-semibold">{comment.name}</span>
                {' '}
                <p className="text-sm font-light">
                {moment(comment.ceatedAt).format('MMM DD, YYYY')}
                </p>
              </p>
              
            </div> */}

              <div className="flex  mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <img
                  src="https://i.pinimg.com/222x/44/5e/fc/445efcdd7459264333a37ff0cf1febd1.jpg"
                  alt="image"
                  height="50px"
                  width="50px"
                  className="rounded-full"
                />
                <div className="text-start">
                  <p className="inline align-middle text-black text-sm font-semibold ml-2">{comment.name}</p>
                  <p className="text-sm text-ligthblack-0 ml-2">
                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                  </p>
                </div>
              </div>

              <p className="whitespace-pre-line mt-4 text-black w-full">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
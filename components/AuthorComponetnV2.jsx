// This is an Author Component in Diffent Style.


import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
    return (
        // different style 
        
        <div className="text-center mt-20 mb-8 p-7 relative rounded-md bg-darkwhite-0 bg-opacity-50">
            <div className="absolute left-0 right-0 -top-6">
                <img
                    src={author.photo.url}
                    alt={author.name}
                    width="60px"
                    height="60px"
                    className="align-middle rounded-full"
                />
            </div>

            {/* different style 
                <div className="pl-10">
                <h4 className="text-ligthblack-0 my-0 font-signature text-start text-xl mb-0.5 font-bold">{author.name}</h4>
                <p className="text-ligthblack-0 text-start text-sm">{author.bio}</p>
                </div> 
            */}

            <h4 className="text-ligthblack-0 my-0 font-signature text-xl mb-0.5 font-bold">{author.name}</h4>
            <p className="text-ligthblack-0 text-sm">{author.bio}</p>
        </div>

    )
}

export default Author

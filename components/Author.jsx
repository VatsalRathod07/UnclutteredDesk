import React from 'react';

const Author = ({ author }) => {
    return (
            <div className="text-center mt-10 mb-8 p-7 relative rounded-md">
                <div className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center ">
                    <img
                        src={author.photo.url}
                        alt={author.name}
                        height="50px"
                        width="50px"
                        className="align-middle rounded-full"
                    />
                    <div className="text-start">
                        <p className="inline align-middle text-ligthblack-0 text-sm font-signature font-semibold ml-2">{author.name}</p>
                        <p className="text-sm font-medium text-ligthblack-0 text-opacity-50 ml-2">
                            Author 
                        </p>
                    </div>
                </div>
                <p className="text-ligthblack-0 text-sm mt-2 md:leading-6">{author.bio}</p>
            </div>
    )
}

export default Author

// import React, { useState } from 'react';
// import { BsRobot } from 'react-icons/bs'

// const ChatGPT = () => {

//   const [queryDescription, setQueryDescription] = useState("")

//   const onSubmit = (e) => {
//     e.preventDefault();

//     console.log("form submitted:", queryDescription);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center font-signature p-10 ${queryDescription ? '' : 'min-h-screen'}` mb-4">
//         <BsRobot size={35} className='text-darkwhite-0 bg-ligthblack-0 p-1 rounded-lg'/>
//         <h2 className="text-2xl font-bold text-ligthblack-0 mb-2">Uncluttered Desk AI</h2>
//       <form className="max-w-lg w-full mt-4" onSubmit={onSubmit}>
//         {/* <label htmlFor="prompt" className="block font-medium mb-2">Write A Prompt</label> */}
//         <div className='flex flex-col items-start md:flex-row md:items-start gap-3'>
//           <input
//             id="prompt"
//             className="w-full rounded-s  focus:outline-none sm:text-sm mb-4 p-2 border"
//             placeholder="Enter your prompt here"
//             onChange={(e) => setQueryDescription(e.target.value)}
//           />
//           <button type="submit" className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-s shadow-sm text-sm font-medium text-white bg-black bg-opacity-80 hover:bg-opacity-100">
//             Generate
//           </button>
//         </div>
//       </form>
//         <div className="max-w-[70%] w-screen mt-8 border-dashed text-center p-3 border-[1.2px]">
//           {/* <h3 className="text-xl font-bold text-ligthblack-0 mb-4"></h3> */}
//           <p className="text-ligthblack-0 text-justify"></p>
//         </div>
//     </div>
//   );
// };

// export default ChatGPT;


import openai from 'openai';
import React, { useState } from 'react';

const ChatGPT = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const generateText = async () => {
    openai.api_key = "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";

    const response = await openai.completions.create({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 1024,
      n: 1,
      stop: ['\n']
    });

    setGeneratedText(response.choices[0].text);
  };

  return (
    <div className={`flex flex-col items-center justify-center font-signature ${generatedText ? '' : 'min-h-screen'}`}>
      <h2 className="text-2xl font-bold text-ligthblack-0 mb-8">Uncluttered Desk AI</h2>
      <form onSubmit={(e) => { e.preventDefault(); generateText(); }} className="max-w-lg w-full">
        <label htmlFor="prompt" className="block font-medium mb-2">Write A Prompt</label>
        <div className='flex gap-3 items-start'>
          <input
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full rounded-md focus:outline-none sm:text-sm mb-4 p-2 border"
          />
          <button type="submit" className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600">
            Generate
          </button>
        </div>
      </form>
      {generatedText && (
        <div className="max-w-lg w-full mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Generated Text</h3>
          <p className="text-gray-700">{generatedText}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGPT;

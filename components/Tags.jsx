// import { getCategories2 } from '../services'  
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// const Tags = () => {

//   const [categories2, setCategories2] = useState([]);

//   useEffect(() => {
//     getCategories2()
//       .then((categories2) => setCategories2(categories2))
//   }, [])


//   return (
//     <div className="bg-darkwhite-0 bg-opacity-30 rounded-lg p-8 mb-3">
//       <h3 className="text-base mb-8 font-semibold border-b pb-4">Tags</h3>
//       <div className="flex flex-wrap gap-2">
//         {categories2.map((tag) => (
//           <Link key={tag.slug} href={`/tag/${tag.slug}`}>
//             <p className="bg-black text-white px-4 py-2 rounded-md text-sm">{tag.name}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tags;

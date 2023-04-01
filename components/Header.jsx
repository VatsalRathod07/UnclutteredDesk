import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      getCategories().then((newCategories) => {
        // sort the categories in the desired order
        const sortedCategories = newCategories.sort(
          (a, b) =>
            ["", "", "", ""].indexOf(a.name) -
            ["Productivity", "Gaming", "Budget", "Insights"].indexOf(b.name)
        );
        setCategories(sortedCategories);
      });
    }, []);
  
    return (
      <div className="container mx-auto px-10 mb-8 ">
        <div className="border-b w-full inline-block border-gray-200 py-7 ">
          <div className="md:float-left block">
            <Link href="/">
              <span className="uppercase cursor-pointer font-bold font-signature -tracking-tight text-3xl text-black">
                ZenForst
                {/* <span className='text-xs font'>Blog's</span> */}
              </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };  

export default Header;
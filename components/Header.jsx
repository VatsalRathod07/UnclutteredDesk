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
            ["Productivity", "Gaming", "Minimal", "Insights"].indexOf(b.name)
        );
        setCategories(sortedCategories);
      });
    }, []);
  
    return (
      <div className="container mx-auto px-10 mb-8 ">
        <div className="w-full inline-block py-7 ">
          <div className="md:float-left block" href="/">
              <span className="text-2xl font-signature font-bold tracking-wider cursor-pointer text-ligthblack-0">UnclutteredDesk</span>
              <p className='sub font-signature font-medium capitalize text-ligthblack-0'>Less clutter, more focus</p>
          </div>
          <div className="hidden md:float-left md:contents capitalize">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-ligthblack-0 ml-4 font-medium cursor-pointer">
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
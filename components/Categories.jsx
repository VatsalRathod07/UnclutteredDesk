import { getCategories } from '../services'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])


  return (
    <div className='bg-darkwhite-0 bg-opacity-30 rounded-lg p-8 mb-8 pb-2'>
      <h3 className="text-base mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3 text-ligthblack-0 text-base font-medium">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
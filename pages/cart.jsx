// Client-side Pgage
import React, { useEffect } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

import ProductAction from '@/store/actions/ProductAction'

// The page component receives products
// from fetching on client
const CartPage = ({}) => {
  // fetchAPI is the function to do data fetching
  const products = useSelector((state) => state.product.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProductAction.getCart())
  }, [])

  return (
    <div className="flex flex-col">
      <h1 className="py-4 text-4xl font-bold">Product Detail (SSG Pgage)</h1>

      <ul>
        {products && products.map((product) => (
          <li key={product.id} className="flex flex-wrap py-2">
            <img className="w-10 h-10 mr-4" src={product.image} />
            <Link href={`/products/${product.slug}`}>
              <a className="hover:text-green-500">{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartPage

// SSR page
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { initializeStore } from '@/store'
import ProductAction from '@/store/actions/ProductAction'
import ProductService from '@/shared/services/ProductService'

// The page component receives products state
// is updated in getServerSideProps by dispatch
const ProductsPage = () => {
  const products = useSelector((state) => state.product.list)

  return (
    <div className="flex flex-col">
      <h1 className="py-4 text-4xl font-bold">Products (SSR Page)</h1>
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

export default ProductsPage

// This function runs at request time on the server
export async function getServerSideProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  const res = await ProductService.getAll()
  dispatch(ProductAction.setProductList(res))

  return {
    props: {
      initialReduxState: reduxStore.getState()
    }
  }
}
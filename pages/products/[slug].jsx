// SSG Pgage
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { initializeStore } from '@/store'
import ProductAction from '@/store/actions/ProductAction'
import ProductService from '@/shared/services/ProductService'

// The page component receives products prop
// from getStaticProps
const ProductDetailPage = () => {
  const product = useSelector((state) => state.product.detail)

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col">
      <h1 className="py-4 text-4xl font-bold">Product Detail (SSG Pgage)</h1>

      <img className="w-20 h-20 mr-4" src={product.image} />
      <h1 className="py-1 text-2xl">{product.name}</h1>
      <span>{product.description}</span>
      <span>Price: {product.price}</span>
    </div>
  )
}

export default ProductDetailPage

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

// This function runs at build time on the build server
export async function getStaticProps({ params }) {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  const res = await ProductService.getBySlug({ slug: params.slug })
  dispatch(ProductAction.setProductDetail(res))

  return {
    props: {
      initialReduxState: reduxStore.getState()
    },
    revalidate: 60
  }
}

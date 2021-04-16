import fetcher from '@/shared/fetcher'

const ProductService = {
  async getAll() {  
    const products = await fetcher('http://localhost:3000/api/products')

    return products
  },

  async getBySlug({ slug }) {
    const product = await fetcher(`http://localhost:3000/api/products/${slug}`)

    return product
  },

  async getCart() {
    const product = await fetcher(`http://localhost:3000/api/cart`)

    return product
  }
}

export default ProductService
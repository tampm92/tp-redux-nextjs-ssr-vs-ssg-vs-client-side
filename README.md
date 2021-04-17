# <h1 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Redux NextJS: Server-side Rendering vs Static Generation vs Client-side</h1>
  
<h3 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Guide setup Redux with Next JS</h3>
  
<p align="center">
  <a href="https://github.com/tampm92/tp-redux-nextjs-ssr-vs-ssg-vs-client-side"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/tampm92/tp-redux-nextjs-ssr-vs-ssg-vs-client-side/build"></a>
  <a href="#last-commit"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tampm92/tp-redux-nextjs-ssr-vs-ssg-vs-client-side"></a>
  <a href="#node-current"><img alt="node-current" src="https://img.shields.io/node/v/next"></a>
  <a href="#license"><img alt="GitHub" src="https://img.shields.io/github/license/tampm92/tp-redux-nextjs-ssr-vs-ssg-vs-client-side"></a>
</p>
  
<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#support">Need Help?</a> •
  <a href="#about">About</a> •
  <a href="#license">License</a>
</p>
  
<br/>

## Introduction

1. How use Redux with `SSR` - `SSG` - `Client-side` in **Next JS**.
2. Example project
  
<br/>
  
## Key Features

- **[Next JS](https://nextjs.org/docs/getting-started)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Setup Tailwind for NextJS](https://blog.tampm.com/posts/tp-next-js-setup)**
- **[TP blog](https://blog.tampm.com/posts/next-js-server-side-rendering-vs-static-generation-vs-client-side)**

<br/>
  
## Usage

```sh
# install libs
yarn
# run dev
yarn dev
# run prod
yarn build
yarn start
```

<br/>
  
## Getting Started

### **Structure**

```js
.
├── 📁 assets
│   ├── 📁 styles
│   │   ├── 📝 tailwind.css
│   │   └── 📝 globals.scss
│   └── 📁 images
├── 📁 components
│   ├── 📁 common
│   └── 📁 partials
├── 📁 layouts
│   ├── 📁 components
│   └── 📝 default.jsx
├── 📁 pages
│   ├── 📁 api
│   ├── 📁 products
│   ├── 📝 _app.jsx
│   ├── 📝 index.jsx
│   └── 📝 cart.jsx
├── 📁 public
├── 📁 shared
│   ├── 📁 contexts
│   │   └── 📝 GlobalContext.js
│   ├── 📁 services
│   │   └── 📝 ProductService.js
│   ├── 📝 config.js
│   └── 📝 fetcher.js
├── 📁 store
│   ├── 📁 actions
│   ├── 📁 reducers
│   ├── 📝 action-types.js
│   └── 📝 index.js
├── 📝 .env
├── 📝 .env.development
├── 📝 .env.production
├── 📝 jsconfig.js
├── 📝 next.config.js
├── 📝 postcss.config.js
├── 📝 tailwind.config.js
└── 📝 README.md
```

<br/>

### **Prerequisites**

- [Node.js](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/getting-started/install)

## Documentation

### **Prepare setting**

You can read this [blog](https://blog.tampm.com/posts/next-js-server-side-rendering-vs-static-generation-vs-client-side)

### **Configuration**

- Install lib

```bash
yarn add react-redux redux-thunk
```

### **Setup Redux**

Read and setup folow `store` folder

> To can use redux with SSR, you must `initStore` by `preloadedState` (see more `/store/index` file)

### **Using**

#### SSR Page `(/pages/products/index.jsx)`

```jsx
const ProductsPage = () => {
  const products = useSelector((state) => state.product.list)

  return (
    <>
      Render products
    </>
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
```

#### SSG Page `(/pages/products/[slug].jsx)`

```jsx
const ProductDetailPage = () => {
  const product = useSelector((state) => state.product.detail)

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      Render product
    </>
  )
}

export default ProductDetailPage

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

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
```

#### Client-side Fetching Page `(/pages/cart.jsx)`

```jsx
const CartPage = ({}) => {
  const products = useSelector((state) => state.product.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProductAction.getCart())
  }, [])

  return (
    <>
      Render products
    </>
  )
}

export default CartPage
```

### **Performance and testing**

Any of testing activities and reports goes here.

<br/>

## Support
  
### **Get Help**
  
**You have a question or problem wasn't solved?** No worries! Just open up a new issue in the `GitHub issue tracker`. Please provide all information to reproduce your problem. If you don't have a GitHub account, you can [contact](#contact) me directly.
  
<br/>
  
## About

### **Known Issues**
  
 - none (that are reported)

<br/>
  
### **Contact**
  
If you haven't done so already, please check out [Get Help](#get-help) for the fastest possible help on your issue. Alternatively you can get in touch with me by:

- Email: tampm920810@gmail.com
  
<br/>

## License

This project is proudly licensed under the [MIT license][git-license].

<!-- LINKS -->
<!-- in-line references: websites -->
[tampm.com]:https://tampm.com

<!-- in-line references to github -->

[git-profile]:https://github.com/tampm92
[git-readme]:README.md
[git-license]:LICENSE.md
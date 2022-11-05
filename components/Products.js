import Image from 'next/image';
import React from 'react'
import Product from '../components/Product';
import AdvCard from './AdvCard';
//import { getProductData } from './ProductArray';
import { productsArray } from './ProductArray';

const data = [

  {
    id:"1",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71m4ILIZIfL._AC_SY400_.jpg"
  },
  {
    id:"2",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61lRkA4GtDL._AC_SY400_.jpg"
  },
  {
    id:"3",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61XpjYwIJoL._AC_SY400_.jpg"
  },
  {
    id:"4",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61mS9c3Oo1L._AC_SY400_.jpg"
  },
  {
    id:"5",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61qtTKW15WL._AC_SY400_.jpg"
  },
  {
    id:"6",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81MTrzxHrRL._AC_SY400_.jpg"
  },
  {
    id:"7",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZfucIXqnL._AC_SY400_.jpg"
  },
  {
    id:"8",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/318iZz6KM+L._AC_SY400_.jpg"
  },
  {
    id:"9",
    src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71IAFQvod5L._AC_SY400_.jpg"
  },
  {
      id:"10",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LEMXcFCVL._AC_SY400_.jpg"
    },
    {
      id:"11",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71vsTXL9v2L._AC_SY400_.jpg"
    },
    {
      id:"12",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61xzbGzQqLL._AC_SY400_.jpg"
    },
    {
      id:"13",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41JsfTVKSIL._AC_SY400_.jpg"
    },
    {
      id:"14",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71IAFQvod5L._AC_SY200_.jpg"
    },
    {
      id:"15",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LEMXcFCVL._AC_SY400_.jpg"
    },

    {
      id:"16",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41JsfTVKSIL._AC_SY400_.jpg"
    },
    {
      id:"17",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71IAFQvod5L._AC_SY200_.jpg"
    },
    {
      id:"18",
      src:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51LEMXcFCVL._AC_SY400_.jpg"
    },

]





function Products() {



  return (

 <div>

  <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 xl:-mt-[375px] mx-auto'>
  {productsArray?.slice(0, 4).map(({id, title, price, description, category, image}) => (
<Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
    ))
  }
  </div>
{/* adv */}
  <div className='bg-white'>
    <span className='flex space-x-4 px-5 pt-4 items-center'><h2 className='text-lg font-semibold'>More items to consider</h2><p className=' cursor-pointer hover:text-red-400 text-sm font-semibold text-cyan-600'>See more</p>
</span> 
  <div className=' h-[200px] mx-4 my-5 flex overflow-x-scroll scrollbar-hide'>

    {
  data?.map(({src, id}) => (

    <AdvCard key={id} src={src} id={id} />



      ))
    }
  </div>
  </div>



  <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
  {productsArray
  ?.slice(4, 12)
  .map(({id, title, price, description, category, image}) => (
<Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
    ))
  }

  </div>


  <div className='bg-white'>
    <span className='flex space-x-4 px-5 pt-4 items-center'><h2 className='text-lg font-semibold'>More items to consider</h2><p className=' cursor-pointer hover:text-red-400 text-sm font-semibold text-cyan-600'>See more</p>
</span> 
  <div className=' h-[200px] mx-4 my-5 flex overflow-x-scroll scrollbar-hide'>

    {
      data.map(({src, id}) => (

    <AdvCard key={id} src={src} id={id} />

      ))
    }
  </div>
  </div>



  <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
  {productsArray
  ?.slice(12, productsArray?.length)
  ?.map(({id, title, price, description, category, image}) => (
<Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} />
    ))
  }

  </div>
  

    </div>


  )
}

export default Products
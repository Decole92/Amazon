import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Products from '../components/Products'

export default function Home() {
  return (
    <div className='bg-gray-100 items-center justify-center max-w-screen-3xl'>
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"/>
      </Head>

      <Header />

     <main className='max-w-screen-2xl mx-auto sm:mx-auto'>

      <Banner />

      <Products 
      //products={products} 
      />

     </main>

    </div>
  )
}


//export async function getServerSideProps(){

  //const products = await fetch("https://fakestoreapi.com/products").then(res=>res.json());
 
  //////return {
   //// props: {
     // products
   // }
//  }
//}


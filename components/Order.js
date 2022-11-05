import moment from 'moment'
import Image from 'next/image'
import React from 'react'



function Order({id, amount, items, timestamp, images}) {
  return (
    <div className='relative border rounded-md'>
        <div className='flex items-center space-x-10 p-2 bg-gray-100 text-sm text-gray-600'>
            <div>
                <p className='font-bold text-xs'>ORDER PLACED</p>
                <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
            </div>
               <div>
                  <p className='text-xs font-bold uppercase'>Total</p>
                <p className='font-bold'> 
                    
                { amount.toFixed(2) } Kč
                </p>
               </div>
              <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>{items?.length} Item(s) </p>
              <p className='absolute top-1  text-xs whitespace-nowrap right-2 w-40 lg:w-72 truncate'>ORDER #{id}</p>
        </div>
       <div className='p-5 sm:p-10'>
        <div className='flex gap-x-5 overflow-x-auto'>




{
        images?.map((image) => (
        <Image alt="" key={image} src={image} height={200} width={200} objectFit='contain'/>
    ))
}
        </div>
       </div>

    </div>
  )
}

export default Order
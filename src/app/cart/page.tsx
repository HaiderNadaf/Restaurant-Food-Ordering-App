import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const cartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/*PRODUCT CONTAINER */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        {/*SINGLE ITEMS */}
        <div className='flex items-center justify-between mb-4'>
        
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div>
          <h1 className='uppercase text-xl font-bold'>silicon</h1>
          <span>Large</span>
          </div>
          <h2 className='font-bold'>$72.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        {/*SINGLE ITEMS */}
        <div className='flex items-center justify-between mb-4'>
        
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div>
          <h1 className='uppercase text-xl font-bold'>silicon</h1>
          <span>Large</span>
          </div>
          <h2 className='font-bold'>$72.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        {/*SINGLE ITEMS */}
        <div className='flex items-center justify-between mb-4'>
        
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div>
          <h1 className='uppercase text-xl font-bold'>silicon</h1>
          <span>Large</span>
          </div>
          <h2 className='font-bold'>$72.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
        {/*PAYMENT CONTAINER */}
        <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
          <div className='flex justify-between'>
            <span>Subtotal (3 items)</span>
            <span>$81.70</span>
          </div>
          <div className='flex justify-between'>
            <span>Services Cost</span>
            <span>$0.00</span>
          </div>
          <div className='flex justify-between'>
            <span>Delivery Cost</span>
            <span className='text-green-500'>free!</span>
          </div>
          <hr className='my-2'/>
          <div className='flex justify-between'>
            <span>Total (INC.VAT)</span>
            <span className='font-bold'>$81.70</span>
          </div>
          <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
          <Link href="/order" className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>ORDER</Link>
        </div>
    </div>
  )
}

export default cartPage
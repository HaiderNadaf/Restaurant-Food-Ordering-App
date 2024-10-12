import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false  // Simulating an unauthenticated user. Update this logic as needed.

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Links for desktop */}
      <div className='hidden md:flex gap-4'>
        <Link href="/" className='hover:font-bold hover:text-xl'>HomePage</Link>
        <Link href="/menu" className='hover:font-bold hover:text-xl'>Type's</Link>
        <Link href="/menu/Order" className='hover:font-bold hover:text-xl'>Menu</Link>
      </div>

      {/* Logo section */}
      <div className='text-2xl font-bold flex flex-row'>
        <Link href="/" className='underline'>PIZZA POINT</Link>
        <Image src="/pizza.jpg" width={30} height={30} alt="Pizza Logo" />
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* Contact & Cart for desktop */}
      <div className='hidden md:flex gap-4 items-center'>
        <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt="Phone Icon" width={20} height={20} />
          <span>9900768505</span>
        </div>

        {/* Cart Icon */}
        <CartIcon />

        {/* Conditional rendering for Order/Login based on user authentication */}
        {!user ? (
          <Link href="/order" className='hover:font-bold hover:text-xl'>Order</Link>
        ) : (
          <Link href="/login" className='hover:font-bold hover:text-xl'>Login</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar

"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  price:  number;
  id : number;
  options?: {title:string; additionalPrice:number} [];
}


const Price = ({price,id,options}:Props) => {

const [total,setTotal] = useState(price);
const [quality,setQuality] = useState(1);
const [selected,setSelected] = useState(0);

useEffect(() => {
  setTotal(
    quality * (options ? price + options[selected].additionalPrice : price)
  );

},[quality,selected,options,price])


  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>
      ${total.toFixed(2)}
      </h2>
      {/* OPTION CONTAINER*/}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUALITY AND BUTTON CONTAINER*/}
      <div className='flex justify-between items-center'>
       {/* QUALITY*/}
       <div className='flex justify-between w-full p-3 ring-1  ring-red-400'>
        <span>Quality</span>
        <div className='flex gap-4 items-center'>
          <button onClick={() => setQuality((prev) => (prev > 1 ? prev -1 : 1))}>{'<'}</button>
          <span>{quality}</span>
          <button  onClick={() => setQuality((prev) => (prev < 9 ? prev +1 : 9))}>{'>'}</button>
        </div>
       </div>
       {/*BUTTON */}
       <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'><Link href="/cart">Add to Cart</Link></button>
       </div>
      
    </div>
  )
}

export default Price
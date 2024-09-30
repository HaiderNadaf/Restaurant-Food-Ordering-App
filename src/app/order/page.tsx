

const orderpage = () => {
  return (
    <div className="p-4 lg:px-20  xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Product</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237649539</td>
            <td className=" py-6 px-1">26.09.2024</td>
            <td className=" py-6 px-1">89.90</td>
            <td className="hidden md:block  py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className=" py-6 px-1 font-bold text-red-500">On the way (approx. 10min)...</td>
        
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12386486827</td>
            <td className="py-6 px-1">18.09.2023</td>
            <td className="py-6 px-1">79.90</td>
            <td className="hidden md:block py-6 px-1">Bell Napoli Pizza(2),Silicon Pizza(2),7up 1L</td>
            <td className="py-6 px-1 text-green-800 font-bold">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12386486845</td>
            <td className="py-6 px-1">18.09.2024</td>
            <td className="py-6 px-1">65.00</td>
            <td className="hidden md:block py-6 px-1">Garlic Parmesan LInguie(1), CoCa Cola 1L</td>
            <td className="py-6 px-1 text-green-800 font-bold">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1238648686</td>
            <td className="py-6 px-1">2.09.2024</td>
            <td className="py-6 px-1">89.00</td>
            <td className="hidden md:block py-6 px-1">Margherita Magic PIzza(1), Spicy Arrabiatic(1)</td>
            <td className="py-6 px-1 text-green-800 font-bold">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default orderpage
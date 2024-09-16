import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div className='py-4 border-t border-b text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4' key={index}>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>
                  <p className='mt-2'>Date : <span className='text-gray-400'>10, sep, 2024</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to Ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium text-white rounded-sm bg-black'>Track Order</button>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Orders
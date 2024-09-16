import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full  max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start  gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>9384 Nonstop Station Opposite,<br />Nellore , Andhrapradesh , India. </p>
            <p className='text-gray-500 text-start'>Tell: +912349873445,<br />Email: titles@gamil.com.</p>
            <p className='text-gray-500 font-semibold  text-xl'>Careers </p>
            <p className='text-gray-500'>Learn more about our team and job openings </p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
          </div>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
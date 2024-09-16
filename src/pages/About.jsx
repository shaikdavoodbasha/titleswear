import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col  md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col  justify-center gap-6 md:w-2/4 text-gray-600'>
          <p> At Titles, we believe that fashion is more than just clothing—it's a way to express who you are. Our mission is to bring you high-quality, trendsetting pieces that reflect your unique style and personality.</p>
          <p>Founded with a passion for fashion, we’re dedicated to offering the latest in men’s, women’s, and kids’ wear. Each collection is carefully curated, blending timeless elegance with modern trends, ensuring there’s something for everyone. From everyday basics to bold statement pieces, our designs are made with love and attention to detail, keeping comfort and quality at the forefront.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We are not just about fashion, but about building a community where style, confidence, and individuality thrive. Join us as we continue to inspire, empower, and bring the best of fashion to your doorstep.</p>
        </div>
      </div>
      <div className='text-xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 flex md:px-16 sm:py-20  flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>At Titles, quality is our top priority. We carefully select premium fabrics and materials to ensure every piece meets the highest standards. Our garments are designed for durability, comfort, and style, so you can feel confident in every purchase. From stitching to finishing touches, we take pride in delivering products that stand the test of time.</p>
        </div>
        <div className='border px-10 flex md:px-16 sm:py-20  flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>We’re here to make your shopping journey effortless and enjoyable. With a user-friendly interface, quick navigation, and secure payment options, finding your perfect outfit has never been easier. Enjoy fast shipping, easy returns, and flexible payment methods, all designed with your convenience in mind. Shopping for fashion should be fun, and we make sure it stays that way!</p>
        </div>
        <div className='border px-10 flex md:px-16 sm:py-20  flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Your satisfaction is our priority. Our dedicated customer support team is always ready to assist you with any questions, concerns, or feedback. Whether you need help with an order, sizing advice, or product inquiries, we’re just a message away. We’re committed to delivering a seamless and personalized shopping experience, ensuring you’re always taken care of.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About

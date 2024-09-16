import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from "../context/ShopContext"
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();//for getting the productId path 
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item, index) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
  useEffect(() => {
    fetchProductData();
  }, [productId])
  return productData ? (
    <div className='border-t-2 pt-10 transistion-opacity ease-in duration-500 opacity-100'>
      {/* product datasss */}
      <div className='flex gap-12  sm:gap-12 flex-col sm:flex-row'>
        {/* Product Imagess */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto  sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] mb-3 sm:w-full flex-shrink cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />

          </div>
        </div>
        {/* Product Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className='pl-2'> (122) </p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-400' : ''}`} key={index}>{item}</button>

              ))}

            </div>

          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex-col flex gap-1'>
            <p>100% Original product</p>
            <p>cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* Description about the product and review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum tenetur, inventore omnis autem, mollitia amet sit dolorem nulla error quia pariatur rerum, molestiae quod? Pariatur tempora iure doloremque officiis excepturi?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum magni ea nisi quod rem. Laudantium officia totam, voluptas quaerat vitae ad veritatis harum possimus error repellat earum atque optio sunt?</p>
        </div>
      </div>
      {/* Displaying related products */}
      <div>
        <RelatedProduct catergory={productData.catergory} subCatergory={productData.subCatergory} />
      </div>

    </div>
  )
    :
    <div className='opacity-0'></div>
}

export default Product
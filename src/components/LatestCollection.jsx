import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([])
    useEffect(() => {
        setLatestProducts(products.slice(2, 12));

    }, [])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-900'>
                    Step into the season ’s hottest looks with our fresh, handpicked collection. Whether you're looking for chic casuals, bold statement pieces, or timeless classics, our latest arrivals have something for everyone. From cozy knits and sleek denim to elegant dresses and trendy streetwear.

                </p>
            </div>
            {/* rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} />

                    ))
                }

            </div>
        </div>
    )
}

export default LatestCollection
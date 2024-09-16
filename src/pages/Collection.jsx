import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../context/ShopContext"
import { assets } from '../assets/assets';
import Title from "../components/Title"
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowfilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubcatergory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const togglecategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))

    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }
  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcatergory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubcatergory(prev => [...prev, e.target.value])
    }
  }
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory));
    }
    setFilterProducts(productsCopy)

  }
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high - low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();

  }, [category, subcategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:ga-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => { setShowfilter(!showFilter) }} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6  ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIERS
          </p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Men'} onChange={togglecategory} />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Women'} onChange={togglecategory} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Kids'} onChange={togglecategory} />Kids
            </p>
          </div>
        </div>
        {/* subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5  ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* product sort */}
          <select onChange={(e) => { setSortType(e.target.value) }} className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        {/* Mapping products  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price} />

            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Collection
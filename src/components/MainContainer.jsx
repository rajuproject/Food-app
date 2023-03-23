import React, { useEffect, useRef, useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'


function MainContainer() {
  const rowContainer = useRef()

  const [scrolValue, setScrolValue] = useState(0)

  useEffect(()=>{
// clearInterval(rowContainer.current)

  // rowContainer.current.scrollLeft  +=scrolValue


  }, [scrolValue])

  return (
<div className='w-full h-full flex flex-col items-center justify-center' >
  <HomeContainer/>
  <section className='w-full my-6'>
  <div className='w-full flex items-center justify-between'>
  <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
  Our fresh & healthy fruits

  </p>
  <div className='hidden md:flex gap-3 items-center'>
  <motion.div
  onClick={()=> setScrolValue(-200)}
    whileTap={{scale: 0.75}} 
    className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex items-center justify-center transition-all duration-100 ease-in-out hover:shadow-lg'><MdChevronLeft className="text-lg text-white"/></motion.div>
  <motion.div
  onClick={()=> setScrolValue(200)}
    whileTap={{scale: 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex items-center justify-center transition-all duration-100 ease-in-out hover:shadow-lg'> <MdChevronRight className="text-lg text-white"/></motion.div>

  </div>
</div>

  </section>
  <RowContainer scrolValue={scrolValue} flag={true}/>
  <MenuContainer/>
  <CartContainer/>
</div>
  )
}

export default MainContainer
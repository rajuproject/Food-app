import React, { useEffect, useRef } from 'react'
import I6 from '../img/i6.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

function RowContainer({flag, scrolValue}) {
  const rowContainer = useRef()

  useEffect(()=>{
// rowContainer.current.scrollLeft  +=scrolValue
  }, [scrolValue])


  return (
    <div className= {`w-full flex gap-5 my-12 ${flag? "overflow-x-scroll scrollbar scroll-smooth" : "overflow-x-hidden"}`}>

    {/* single product  */}

        <div className='w-[300px] min-w-[300px] md:w-[340px] rounded-lg p-2 h-auto my-12 bg-gray-100 shadow-md backdrop-blur-md '>
        <div className='w-full flex items-center justify-between'>
        <motion.img whileHover={{scale:1.2}} src={I6} alt="icecream" className='w-40 -mt-8 drop-shadow-2xl' />
        <motion.div 
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
            <MdShoppingBasket className='text-white'/>
        </motion.div>

        </div>
        <div className='w-full flex flex-col gap-4 items-end justify-end'>
        <p className=' text-textColor  font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
        <p className='mt-1 text-sm text-gray-500 '> 45 Calories</p>
        <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> 5.25
            </p>
        </div>
        </div>

        </div>

{/* single product end  */}
    {/* single product  */}

        <div className='w-[300px] min-w-[300px] md:w-[340px] rounded-lg p-2 h-auto my-12 bg-gray-100 shadow-md backdrop-blur-md '>
        <div className='w-full flex items-center justify-between'>
        <motion.img whileHover={{scale:1.2}} src={I6} alt="icecream" className='w-40 -mt-8 drop-shadow-2xl' />
        <motion.div 
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
            <MdShoppingBasket className='text-white'/>
        </motion.div>

        </div>
        <div className='w-full flex flex-col gap-4 items-end justify-end'>
        <p className=' text-textColor  font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
        <p className='mt-1 text-sm text-gray-500 '> 45 Calories</p>
        <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> 5.25
            </p>
        </div>
        </div>

        </div>

{/* single product end  */}
    {/* single product  */}

        <div className='w-[300px] min-w-[300px] md:w-[340px] rounded-lg p-2 h-auto my-12 bg-gray-100 shadow-md backdrop-blur-md '>
        <div className='w-full flex items-center justify-between'>
        <motion.img whileHover={{scale:1.2}} src={I6} alt="icecream" className='w-40 -mt-8 drop-shadow-2xl' />
        <motion.div 
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
            <MdShoppingBasket className='text-white'/>
        </motion.div>

        </div>
        <div className='w-full flex flex-col gap-4 items-end justify-end'>
        <p className=' text-textColor  font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
        <p className='mt-1 text-sm text-gray-500 '> 45 Calories</p>
        <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> 5.25
            </p>
        </div>
        </div>

        </div>

        <div className='w-[300px] min-w-[300px] md:w-[340px] rounded-lg p-2 h-auto my-12 bg-gray-100 shadow-md backdrop-blur-md '>
        <div className='w-full flex items-center justify-between'>
        <motion.img whileHover={{scale:1.2}} src={I6} alt="icecream" className='w-40 -mt-8 drop-shadow-2xl' />
        <motion.div 
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
            <MdShoppingBasket className='text-white'/>
        </motion.div>

        </div>
        <div className='w-full flex flex-col gap-4 items-end justify-end'>
        <p className=' text-textColor  font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
        <p className='mt-1 text-sm text-gray-500 '> 45 Calories</p>
        <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> 5.25
            </p>
        </div>
        </div>

        </div>

{/* single product end  */}
    {/* single product  */}

        <div className='w-[300px] min-w-[300px] md:w-[340px] rounded-lg p-2 h-auto my-12 bg-gray-100 shadow-md backdrop-blur-md '>
        <div className='w-full flex items-center justify-between'>
        <motion.img whileHover={{scale:1.2}} src={I6} alt="icecream" className='w-40 -mt-8 drop-shadow-2xl' />
        <motion.div 
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
            <MdShoppingBasket className='text-white'/>
        </motion.div>

        </div>
        <div className='w-full flex flex-col gap-4 items-end justify-end'>
        <p className=' text-textColor  font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
        <p className='mt-1 text-sm text-gray-500 '> 45 Calories</p>
        <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> 5.25
            </p>
        </div>
        </div>

        </div>

{/* single product end  */}
    {/* single product  */}

        <div className='w-[300px] min-w-[300px] md:w-[340px] rounded-lg p-2 h-auto my-12 bg-gray-100 shadow-md backdrop-blur-md '>
        <div className='w-full flex items-center justify-between'>
        <motion.img whileHover={{scale:1.2}} src={I6} alt="icecream" className='w-40 -mt-8 drop-shadow-2xl' />
        <motion.div 
        whileTap={{scale:0.75}}
        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
            <MdShoppingBasket className='text-white'/>
        </motion.div>

        </div>
        <div className='w-full flex flex-col gap-4 items-end justify-end'>
        <p className=' text-textColor  font-semibold text-base md:text-lg '>Chocolate & Vanilla</p>
        <p className='mt-1 text-sm text-gray-500 '> 45 Calories</p>
        <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> 5.25
            </p>
        </div>
        </div>

        </div>


    </div>
  )
}

export default RowContainer
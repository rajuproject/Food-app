import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import { RiRefreshFill } from "react-icons/ri";
import {BiMinus} from "react-icons/bi"
import { BiPlus } from 'react-icons/bi';
import cartImage from '../img/i1.png'

function CartContainer() {
  return (
    <div className='fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col  z-[101]'>

<div className='w-full flex items-center justify-between p-4 cursor-pointer'>
<motion.div whileTap={{scale: 0.75}}>
<MdOutlineKeyboardBackspace className="text-textColor  text-3xl"/>
</motion.div>
<p className='text-textColor text-lg font-semibold'>Cart</p>
<motion.p
whileTap={{scale: 0.75}}
 className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base'>Clear <RiRefreshFill/>
 </motion.p>
</div>



{/* button section  */}

<div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col '>
<div className='w-full h-[340px] md:h-[420px] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>



{/* ___________________________________________ */}
{/* cart item  */}
<div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 '>
<img src={cartImage} alt= "cartItem" className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>


{/* Name section  */}

<div className='flex flex-col gap-2'>
<p className='text-base text-gray-50'>Chocolate vanilla </p>
<p className='text-sm block text-gray-300 font-semibold'>$ 8.5</p>

</div>

<div className='group flex items-center gap-2 ml-auto cursor-pointer'>
<motion.div whileTap={{scale: 0.75}} className=''>
<BiMinus className='text-gray-50'/>
</motion.div>

<p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>

<motion.div whileTap={{scale: 0.75}} className=''>
<BiPlus className='text-gray-50'/>
</motion.div>


</div>

</div>


{/* _________________________________________ */}
{/* ___________________________________________ */}
{/* cart item  */}
<div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 '>
<img src={cartImage} alt= "cartItem" className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>


{/* Name section  */}

<div className='flex flex-col gap-2'>
<p className='text-base text-gray-50'>Chocolate vanilla </p>
<p className='text-sm block text-gray-300 font-semibold'>$ 8.5</p>

</div>

<div className='group flex items-center gap-2 ml-auto cursor-pointer'>
<motion.div whileTap={{scale: 0.75}} className=''>
<BiMinus className='text-gray-50'/>
</motion.div>

<p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>

<motion.div whileTap={{scale: 0.75}} className=''>
<BiPlus className='text-gray-50'/>
</motion.div>


</div>

</div>


{/* _________________________________________ */}
{/* ___________________________________________ */}
{/* cart item  */}
<div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 '>
<img src={cartImage} alt= "cartItem" className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>


{/* Name section  */}

<div className='flex flex-col gap-2'>
<p className='text-base text-gray-50'>Chocolate vanilla </p>
<p className='text-sm block text-gray-300 font-semibold'>$ 8.5</p>

</div>

<div className='group flex items-center gap-2 ml-auto cursor-pointer'>
<motion.div whileTap={{scale: 0.75}} className=''>
<BiMinus className='text-gray-50'/>
</motion.div>

<p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>

<motion.div whileTap={{scale: 0.75}} className=''>
<BiPlus className='text-gray-50'/>
</motion.div>


</div>

</div>


{/* _________________________________________ */}
{/* ___________________________________________ */}
{/* cart item  */}
<div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 '>
<img src={cartImage} alt= "cartItem" className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>


{/* Name section  */}

<div className='flex flex-col gap-2'>
<p className='text-base text-gray-50'>Chocolate vanilla </p>
<p className='text-sm block text-gray-300 font-semibold'>$ 8.5</p>

</div>

<div className='group flex items-center gap-2 ml-auto cursor-pointer'>
<motion.div whileTap={{scale: 0.75}} className=''>
<BiMinus className='text-gray-50'/>
</motion.div>

<p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>

<motion.div whileTap={{scale: 0.75}} className=''>
<BiPlus className='text-gray-50'/>
</motion.div>


</div>

</div>


{/* _________________________________________ */}
{/* ___________________________________________ */}
{/* cart item  */}
<div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 '>
<img src={cartImage} alt= "cartItem" className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>


{/* Name section  */}

<div className='flex flex-col gap-2'>
<p className='text-base text-gray-50'>Chocolate vanilla </p>
<p className='text-sm block text-gray-300 font-semibold'>$ 8.5</p>

</div>

<div className='group flex items-center gap-2 ml-auto cursor-pointer'>
<motion.div whileTap={{scale: 0.75}} className=''>
<BiMinus className='text-gray-50'/>
</motion.div>

<p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>

<motion.div whileTap={{scale: 0.75}} className=''>
<BiPlus className='text-gray-50'/>
</motion.div>


</div>

</div>


{/* _________________________________________ */}
{/* ___________________________________________ */}
{/* cart item  */}
<div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 '>
<img src={cartImage} alt= "cartItem" className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>


{/* Name section  */}

<div className='flex flex-col gap-2'>
<p className='text-base text-gray-50'>Chocolate vanilla </p>
<p className='text-sm block text-gray-300 font-semibold'>$ 8.5</p>

</div>

<div className='group flex items-center gap-2 ml-auto cursor-pointer'>
<motion.div whileTap={{scale: 0.75}} className=''>
<BiMinus className='text-gray-50'/>
</motion.div>

<p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>1</p>

<motion.div whileTap={{scale: 0.75}} className=''>
<BiPlus className='text-gray-50'/>
</motion.div>


</div>

</div>


{/* _________________________________________ */}
</div>



{/* cart total section  */}

<div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
<div className='w-full flex items-center justify-between'>
<p className='text-gray-400 text-lg'>Sub Total</p>
<p className='text-gray-400 text-lg'>$ 8.5</p>

</div>
<div className='w-full flex items-center justify-between'>
<p className='text-gray-400 text-lg'>Delivery</p>
<p className='text-gray-400 text-lg'>$ 2.5</p>

</div>

<div className='w-full border-b border-gray-600 my-2'></div>

<div className='w-full flex items-center justify-between'>
<p className='text-gray-400 text-lg'>Total</p>
<p className='text-gray-400 text-lg'>$ 12.5</p>

</div>

<motion.button 
whileTap={{scale:0.8}}
type="button"
className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out'
>
Check Out
</motion.button>

</div>

</div>









    </div>
  )
}

export default CartContainer
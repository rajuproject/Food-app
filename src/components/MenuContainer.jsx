import React, { useEffect, useState } from 'react'
import {IoFastFood} from "react-icons/io5"
import { catagories } from './utils/data'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'

function MenuContainer() {

    const [filter, setFilter] = useState("chicken")
    useEffect(()=>{}, [filter])

  return (
    <section className='w-full my-6' id='menu'>
    <div className='w-full flex flex-col items-center justify-center'>
    <p className='text-2xl font-semibold capitalize text-headingColor mr-auto relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
  Our Hot Dishes

  </p>
<div className='w-full flex items-start justify-start lg:justify-center gap-8  py-6 overflow-x-scroll scrollbar-none'>
{catagories && catagories.map(catagory =>(
    <motion.div 
    whileTap={{scale:0.75}}
    onClick={()=> setFilter(catagory.urlParaName)}
    key={catagory.id} className={`group ${filter === catagory.urlParaName? "bg-red-500" : "bg-white"} w-24 min-w-[94px] h-28 cursor-pointer hover:bg-red-600 rounded-lg drop-shadow-xl flex-col flex gap-3 items-center justify-center duration-150 transition-all ease-in-out`}>
<div className={`w-10 h-10 rounded-full ${filter === catagory.urlParaName? "bg-white" : "bg-red-500"} group-hover:bg-card flex items-center justify-center`}>
    <IoFastFood className={`${filter === catagory.urlParaName? "text-textColor" : "text-white"} group-hover:text-textColor text-lg`}/>
   
</div>
 <p className={`text-sm ${filter === catagory.urlParaName? "bg-red-500" : "bg-red-white"} group-hover:text-white`}>{catagory.name}</p>
</motion.div>
))}

</div>

<div className='w-full'>
<RowContainer />

</div>
    </div>
    </section>
  )
}

export default MenuContainer
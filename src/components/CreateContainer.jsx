import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdCloudUpload, MdFastfood, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import {catagories} from '../components/utils/data.js'
import Loader from './Loader.jsx'
// import {Loader} from '../components/Loader'

function CreateContainer() {

const [title, setTitle]  = useState("")
const [categories, setCategories]  = useState(catagories)
const [price, setPrice]  = useState("")
const [category, setCategory]  = useState(null)
const [imageAsset, setImageAsset]  = useState(null)
const [fields, setFields]  = useState(false)
const [alertStatus, setAlertStatus]  = useState("danger")
const [msg, setMsg]  = useState(null)
const [isLoading, setIsLoading]  = useState(false)

const uploadImage = (e) =>{
  setIsLoading(true)
  const iamgeFile = e.target.files[0]
  console.log(iamgeFile)

}
const deleteImage = () =>{

}

const saveDetails = () =>{

}

  return (
    <div className='w-full min-h-screen items-center justify-center flex'>
      <div className='w-[90%] md:w-[75%] flex flex-col items-center gap-4 justify-center border border-gray-200 rounded-lg p-4'>

{
  fields && (
    <motion.p 
    initial={{opacity:0}}
    animate= {{opacity:1}}
    exit = {{opacity:0}}
    className={`w-full p-2 rounded-lg text-center font-semibold ${
      alertStatus ==="danger" 
      ?"bg-red-400 text-red-800"
      : "bg-emerald-400 text-emerald-800"
    }`}>
  {msg}
    </motion.p>
  )
}

<div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
<MdFastfood className='text-xl text-gray-700'/>
<input 
type= "text" 
required value={title}
 placeholder="Give me a title..." 
 className=' w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor'
  onChange={(e)=> setFields(e.target.value)}

 />
</div>


<div className='w-full'>
<select className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer' onChange={(e) => setCategory(e.target.value)}>
  <option value="other" className='bg-white'> Select Category

  </option>
  {categories && categories.map(item =>(
    <option key={item.id} className="text-base border-0 capitalize bg-white text-headingColor outline-none
    "
    value={item.urlParaName}>
{item.name}
    </option>
  ))}
</select>
</div>

<div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px] md:h-[425px] cursor-pointer rounded-lg'>
{
  isLoading ? (

  <Loader/>
  ) : (
     <>
  {!imageAsset ? (<>
  <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
<div className='w-full h-full flex flex-col items-center justify-center'>
<MdCloudUpload className='text-gray-500 text-3xl hove
text-gray-700'/>
<p className='text-gray-500 hover:text-gray-700'>
  Click here to upload
</p>

</div>
<input type="file" name='uploadimage' accept='image/*' 
  onChange={uploadImage}
  className = "w-0 h-0"
/>
  </label>
  </>
  ) : (
    <>
      <div className='relative h-full'>
      <img src={imageAsset} alt = "upload_image" className='w-full h-full object-cover'/>
      <button type='button' className='absolute button-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-100 transition-all ease-in-out'
      onClick={deleteImage}><MdDelete className='text-white'/></button>

      </div>
    </>
    )} 
  </>
)}
</div>
<div className='w-full flex flex-col md:flex-row items-center gap-3'>
<div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
<MdFoodBank className='text-gray-700 text-2xl'/>
<input type="text"
 required 
  placeholder='categories'
  value={category}
  onChange = {(e) => setCategories(e.target.value) }
   className=' w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>

</div>

</div>
<div className='w-full flex flex-col md:flex-row items-center gap-3'>
<div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
<MdAttachMoney className='text-gray-700 text-2xl'/>
<input type="text"
 required 
  placeholder='price'
  value={price}
  onChange = {(e) => setPrice(e.target.value) }
   className=' w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>

</div>

</div>


<div className='flex items-center w-full'>
<button type='button' className='ml-0 md:ml-auto w-full  border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold' onClick={saveDetails}>Save</button>

</div>
      </div>
    </div>
  )
}

export default CreateContainer
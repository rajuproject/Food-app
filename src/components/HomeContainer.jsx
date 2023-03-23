import React from 'react'
import Delivery from '../img/delivery.png'
import Hero from '../img/heroBg.png'
import { heroData } from './utils/data'
function HomeContainer() {
  return (
      <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full '>

    <div className='py-2 flex flex-col items-start flex-1'>
      <div className='flex items-center gap-2 justify-center bg-orange-200 px-4 py-1 rounded-full'>
        <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
        <div className='w-10 h-10 rounded-full bg-white overflow-hidden drop-shadow-xl'>
        <img className='w-full h-full object-contain' src={Delivery} alt="delivery"/>

        </div>
      </div>
      <p className='text-[2.5rem] md:text-[4rem] font-bold  tracking-wide text-headingColor'>
      The Fastest Delivery in {" "}
      <span className='text-orange-600 text-[3rem]'>Your City</span>
      </p>
      <p className='text-base text-text-Color text-center md:text-left w-[80%] '>
      
      In this free course, we are going to develop a full stack food delivery application using Reactjs, Firebase, Framer motion, Tailwind css. This projects allows to the user to add new items and to maintain all the things over the firestore cloud database
      </p>
      <button type='button' className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
    </div>
    <div className='py-2 relative  flex items-center'>
        
            <img src={Hero} className="lg:h-[650px] h-[420px] lg:w-auto w-full ml-auto" alt="heroImage"/>
            <div className='w-full  gap-4 shadow-x-md flex-wrap  lg:top-0 left-0  lg:h-full absolute flex items-center justify-center px-16 lg:px-32 py-4 '>

             {
                heroData && heroData.map(n =>(
                    <div key={n.id} className='lg:w-[190px]  p-4 bg-cardOverlay backdrop-blur-md text-center justify-center items-center h-auto rounded-md '>
                <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="image"/>
                    <p className='text-base lg:text-xl text-center font-semibold text-textColor'> {n.name}</p>
                    <p className='text-[12px] lg:text-md  text-center font-semibold text-lighttextGray my-1 lg:my-3 '>{n.decp}</p>
                    <p className='text-sm font-semibold text-headingColor '><span className='text-x5 text-red-600'>$</span> {n.price}</p>
                </div>
                ))
             }
            </div>
       
    </div>
   
 
    </section>
  )
}

export default HomeContainer
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import mainBuilding1 from './main_building1.jpeg'
import { NavLink } from 'react-router-dom';
import Nav3 from './Nav3';

import News from './imgs/News.svg'



export default function Homemain() {
  return (
    <>
   <Nav3/>
    <div className="relative w-full p-4">
  
        <img src={mainBuilding1} className=' rounded-md lg:h-96 w-full '/>
        <div className="absolute lg:text-3xl bg-clip-border h-4 bg-opacity text-white bottom-12  left-1/2 -translate-x-1/2  text-sm lg"> <h1> <b> Welcome to Government Polytechnic </b> </h1> <br />  </div>
</div>


<hr className="p-5"></hr>
   < div className="flex flex-wrap justify-evenly p-4">
    <div className="flex flex-col items-center p-3">
      <img className="w-36 rounded-full p-2 shadow-md border-2 border-gray-200" src={"head-img/ChandrakantPatil.jpeg"} alt="minister higher and technical education"></img>
      <p className="pt-4 font-bold">Shri. Chandrakant Patil</p>
      <p>Hon'ble Minister</p>
      <p>Higher & Technical Education</p>
    </div>
    
      
    <div className="flex flex-col items-center p-3">
      <img className="w-36 rounded-full p-2 shadow-md border-2 border-gray-200" src={"head-img/Rastogi.jpg"} alt="minister higher and technical education"></img>
      <p className="pt-4 font-bold">Shri. Vikas Chandra Rastogi</p>
      <p>Principal Secretary</p>
      <p>Higher & Technical Education</p>
    </div>
    <div className="flex flex-col items-center p-3">
      <img className="w-36 rounded-full p-2 shadow-md border-2 border-gray-200" src={"head-img/Ewagh.png"} alt="minister higher and technical education"></img>
      <p className="pt-4 font-bold">Dr. Abhay E.Wagh</p>
      <p>Director</p>
      <p>Technical Education Maharashtra</p>
    </div>
    </div>
    
    <hr className="bg-gray-300"></hr>

<div className="flex flex-col">
   <h1 className='text-3xl text-center font-bold my-7'> Tools ⚙ </h1>

  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-12">
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">तंत्रशिक्षण पदविका प्रवेश</h2>
        <p className="mt-2 text-sm text-gray-500">Engineering Degree admission</p>
      </div>
    </div>

    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Online Payment </h2>
        <p className="mt-2 text-sm text-gray-500">SBI Collect </p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">Video Lectures </h2>
        <p className="mt-2 text-sm text-gray-500">solve your query </p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">E-courses </h2>
        <p className="mt-2 text-sm text-gray-500">Upgrade yourself!! </p>
      </div>
    </div>
  </div>
</div>


<section className="pt-2 lg:pt-10 pb-10 lg:pb-10">
   <h1 className='text-3xl font-bold pb-10 mt-10' align="center" >Events 🔥 </h1>
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     Netizens 
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     A state level event organize by ITSA (Information Technology Student Association) Information Technology
                     
                  </p>
                  <a
                     href="https://youtu.be/zvjllzkLEcw"
                     className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  Watch event 
                  </a>
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg" alt="image" className="w-full"/>
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        " >
                     Shield 
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a href="javascript:void(0)"
                     className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  Watch Event 
                  </a>
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     Knovelty
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a 
                     href="javascript:void(0)"
                     className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition"
                     >
                  Watch Event
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<div className='items-center'>

<h1 className='text-center text-[#164360] text-2xl bold mt-16 ' >Notifications</h1>
        
        <div className="lg:mx-10 flex justify-center items-center gap-40 mt-28">

            <div className="w-96 h-96 hidden lg:block">
                {/* <img src={Notify} className="ml-10" /> */}
            </div>

            {/* <!-- component --> */}
    <div className="lg:w-1/2 mx-8 rounded-xl bg-tc-nav p-10 lg:p-24 text-gray-800 md:text-left overflow-scroll items-center max-h-96">
           
           <NavLink to="/" >
            
            <h1 className='p-3 text-center text-2xl lg:-mt-10 mb-10 rounded-xl bg-[#fff] italic'>Admission</h1>
            
            </NavLink>

           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, non! </h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequatur. </h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem eos quibusdam nesciunt velit. Accusamus natus aut ut deserunt aliquid.</h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque accusamus iure, ullam mollitia quo voluptatibus sint ea? Tempore, sint.</h1>

            </NavLink>
          
    </div> 
    
    </div>
        </div>
     

         <div className='items-center mt-28 mb-20  ' >

<h1 className='text-center text-[#164360] text-2xl bold mt-16 ' >News</h1>
        
        <div className="lg:mx-10 flex justify-center items-center gap-40 mt-28">

          

            {/* <!-- component --> */}
     <div className="lg:w-1/2 mx-8 rounded-xl bg-tc-nav p-10 lg:p-24 text-gray-800 md:text-left overflow-scroll items-center	max-h-96">
           
           <NavLink to="/" >
            
            <h1 className='p-3 text-center text-2xl lg:-mt-10 mb-10 rounded-xl bg-[#fff] italic ' >Admission</h1>
            
            </NavLink>

           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic ' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, perferendis?</h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, id. </h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa dolore veniam adipisci numquam eveniet obcaecati harum illum dolor voluptas at molestiae, eum maxime officiis reprehenderit aliquam dolorum dolores praesentium? </h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem eos quibusdam nesciunt velit. Accusamus natus aut ut deserunt aliquid.</h1>

            </NavLink>
          
           <NavLink to="/" >

            <h1 className='text-center p-10 text-lg italic' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque accusamus iure, ullam mollitia quo voluptatibus sint ea? Tempore, sint.</h1>

            </NavLink>
          
    </div>
    <div className="w-96 h-96 hidden lg:block">
                <img src={News} className="ml-10" />
            </div>
    </div>  

         </div>  

    </>

  )
}

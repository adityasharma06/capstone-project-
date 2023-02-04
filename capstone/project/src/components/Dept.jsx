import React from 'react'
import img from './imgs/logo.png'

const Dept = () => {
  return (
    <div className='flex flex-col justify-center'> 


        <div className='flex justify-center' >

            <div className="mt-10">

                <div className="">
                    <img src={img} className="rounded-full border-4 border-white drop-shadow-2xl" />
                </div>

                <div className="text-center font-bold mt-5 leading-9 ">
                    <h1>Mr. H K Nemade</h1>
                    <h1>ME</h1>
                    <h1>( Head Of Department )</h1>
                </div>

            </div>

        </div>

                    {/* ----------------------------------------------------------------------------------- */}


        <div className="flex flex-col lg:flex-row justify-center my-10 lg:mx-10">

            <div className="lg:w-1/3 mx-8 rounded-2xl bg-tc-nav p-10 lg:p-24 mb-10 text-gray-800 md:text-left text-center items-center">
                <h1 className='p-3 text-center font-bold text-2xl lg:-mt-10 mb-8 rounded-xl bg-[#fff] ' >Vision</h1>
                    <div className="text-center">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore deleniti quibusdam soluta eius fuga non, magnam nobis distinctio suscipit neque doloribus placeat voluptates, nihil omnis praesentium voluptatem aut dolorem!</h1>
                    </div>
            </div>
            <div className="lg:w-1/3 mx-8 rounded-2xl bg-tc-nav p-10 lg:p-24 mb-10 text-gray-800 md:text-left text-center items-center">
                <h1 className='p-3 text-center font-bold text-2xl lg:-mt-10 mb-8 rounded-xl bg-[#fff] ' >Mission</h1>
                    <div className="text-center">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore deleniti quibusdam soluta eius fuga non, magnam nobis distinctio suscipit neque doloribus placeat voluptates, nihil omnis praesentium voluptatem aut dolorem!</h1>
                    </div>
            </div>
            <div className="lg:w-1/3 mx-8 rounded-2xl bg-tc-nav p-10 lg:p-24 lg:mb-10 text-gray-800 md:text-left text-center items-center">
                <h1 className='p-3 text-center font-bold text-2xl lg:-mt-10 mb-8 rounded-xl bg-[#fff] ' >PEO's</h1>
                    <div className="text-center">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore deleniti quibusdam soluta eius fuga non, magnam nobis distinctio suscipit neque doloribus placeat voluptates, nihil omnis praesentium voluptatem aut dolorem!</h1>
                    </div>
            </div>

            

        </div>

            {/* ----------------------------------------------------------------------------------- */}

        <div className="mx-10">

            <div className="lg:mx-8 rounded-2xl bg-tc-nav p-10 lg:p-24 text-gray-800 md:text-left items-center">
                <h1 className='p-3 text-center font-bold text-2xl lg:-mt-10 mb-8 rounded-xl bg-[#fff] ' >Achievements</h1>
                    <div className="leading-10 text-center">
                        <h1 className='' >1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, repellendus.</h1>
                        <h1 className='' >2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, repellendus.</h1>
                        <h1 className='' >3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, repellendus.</h1>
                        <h1 className='' >4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, repellendus.</h1>
                        <h1 className='' >5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, repellendus.</h1>
                    </div>
            </div>

        </div>

                {/* ----------------------------------------------------------------------------------- */}

        <div className="flex justify-center flex-col">

            <h1 className='text-center text-[#164360] text-2xl font-bold m-20 ' >Faculty & Staff</h1>


            <div className="mx-10 flex flex-col lg:flex-row justify-center ">

                <div className="lg:mx-8 w-full rounded-2xl bg-tc-nav p-10 lg:p-24 text-gray-800 md:text-left mb-10 items-center">
                    <h1 className='p-3 text-center font-bold text-2xl lg:-mt-10 mb-8 rounded-xl bg-[#fff] '>Teaching Staff</h1>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Nikunj Ranga <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Aditya Sharma <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Prathamesh Sangale <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Kush Fule <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                </div>


                <div className="lg:mx-8 w-full rounded-2xl bg-tc-nav p-10 lg:p-24 text-gray-800 md:text-left lg:mb-10 items-center">
                    <h1 className='p-3 text-center font-bold text-2xl lg:-mt-10 mb-8 rounded-xl bg-[#fff] '>Non - Teaching Staff</h1>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Nikunj Ranga <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Aditya Sharma <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Prathamesh Sangale <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src={img} className="w-24 rounded-full" />
                            <h1 className='mx-4' >Mr. Kush Fule <br /> <span className='text-blue-500' >more info..</span> </h1>
                        </div>
                </div>


            </div>

        </div>

        {/* ----------------------------------------------------------------------------------- */}

        <div className="">
        <h1 className='text-center text-[#164360] text-2xl font-bold m-20' >Labs</h1>
        </div>

        {/* ----------------------------------------------------------------------------------- */}

    </div> 
  )
}

export default Dept ;
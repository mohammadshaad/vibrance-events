import React from 'react'
import '../../components/Main/styles/style.css'
import banner from '../../assets/banner.webp'
import Inputs from '../../components/Inputs'

function index() {
    return (
        <>

            <div className='main-container flex items-center justify-center w-full h-full'>
                <div className='main-wrapper flex items-center justify-start flex-col w-full h-full m-10 gap-6'>
                    <div>
                        <img src={banner} alt='banner' className='mt-5 md:mt-10 hover:scale-105 duration-300 transition-all' />
                    </div>


                    <div className=''>
                        <Inputs />
                    </div>
                </div>
            </div>

        </>
    )
}

export default index
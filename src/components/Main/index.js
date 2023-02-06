import React from 'react'
import '../../components/Main/styles/style.css'
import banner from '../../assets/banner.webp'
import Filters from '../../components/Filters'
import Cards from '../../components/Cards'

function index() {
    return (
        <>

            <div className='main-container flex items-center justify-center w-full h-auto'>
                <div className='main-wrapper flex items-center justify-start flex-col w-full h-full m-5 md:m-10 gap-5 md:gap-10'>
                    <div>
                        <img src={banner} alt='banner' className='banner-image mt-5 md:mt-10 duration-300 transition-all' />
                    </div>


                    <div className='w-full flex items-center justify-center'>
                        <Filters />
                    </div>

                    <div className='w-full h-full flex-wrap gap-12 flex items-center justify-center'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>
            </div>

        </>
    )
}

export default index
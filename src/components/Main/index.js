import React from 'react'
import '../../components/Main/styles/style.css'
import banner from '../../assets/banner.png'
import Filters from '../../components/Filters'
import Cards from '../../components/Cards'
import { motion } from "framer-motion"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../utils/Spinner';
import ReactImageFallback from "react-image-fallback";



function index() {
    return (
        <>

            <div className='main-container flex items-center justify-center w-full h-auto'>
                <div className='main-wrapper flex items-center justify-center flex-col w-full h-full m-5 md:m-10 gap-5 md:gap-10'>
                    <div className='banner w-full h-full flex items-end justify-start'>
                        {/* <img className='absolute rocket mb-3' src={rocket} alt='' /> */}
                        <div className='w-full h-full flex items-center justify-center'>
                            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='flex justify-center mx-auto'>
                                <img src={banner} alt='banner' className='banner-image duration-300 w-10/12 transition-all' />
                            </motion.div>

                        </div>
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
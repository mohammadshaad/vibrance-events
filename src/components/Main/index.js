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

            <div className='flex items-center justify-center w-full h-auto'>
                <div className='flex items-center justify-center flex-col w-full h-full m-5 md:m-10 gap-5 md:gap-4'>
                    {/* <div className='banner w-full h-full flex items-end justify-start'>
                        <div className='flex flex-col space-y-6'>
                            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='flex justify-center w-10/12 mx-auto'>
                                <img src={banner} alt="merch" />
                            </motion.div>
                        </div>

                    </div> */}
                    <div className='flex flex-col space-y-6 h-full w-11/12'>

                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='flex justify-center mx-auto'>
                            <img src={banner} alt="merch" />
                        </motion.div>
                    </div>



                    <div className='w-full flex items-center justify-center'>
                        <Filters />
                    </div>


                    <div className='w-full h-full flex-wrap gap-12 flex items-center justify-center'>
                        <Cards />
                    </div>
                </div>
            </div>

        </>
    )
}

export default index
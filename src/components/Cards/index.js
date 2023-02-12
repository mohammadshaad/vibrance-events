// import React from 'react'
// import '../../components/Cards/styles/style.css'
// import poster from '../../assets/poster.png'

// function index() {
//   return (
//     <>
//       <div className='flex items-center justify-center'>
//         <div className='flex items-center justify-center'>
//           <div className='group card-item flex items-center justify-center flex-col border border-black rounded-lg md:rounded-xl hover:bg-white cursor-pointer duration-200 transition-all'>
//             <div className='flex items-center justify-center m-2 md:m-5 flex-col gap-4'>
//               <div className='flex items-center justify-center flex-col gap-2'> 
//                 <div className='card-image'>
//                   <img src={poster} alt='event-poster' className='w-60 h-50 md:w-full md:h-full'/>
//                 </div>
//                 <div>
//                   Heading
//                 </div>
//                 <div className='event-description w-11/12 text-justify md:text-sm leading-snug'>
//                   Brief Description about the event in 3 to 4 Lines stating the main and essential details for the user. <br /> <a href='/' target={'_blank'} className='underline font-semibold'> view more </a>
//                 </div>
//               </div>
//               <div className='flex items-center justify-start w-full h-full'>
//                 <div className='flex items-start justify-center flex-col gap-2 md:gap-3 w-full'>
//                   <div className='flex items-center justify-center bg-white rounded-full px-2 py-0.5 gap-1 md:px-3 md:py-1.4 md:gap-2 group-hover:border-[#7d0ef9] border border-[white] duration-200 transition-all'>
//                     <div className=''>
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4">
//                         <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
//                         <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
//                       </svg>
//                     </div>
//                     <div className='event-more-details w-full'>
//                       Date and Time
//                     </div>
//                   </div>

//                   <div className='flex items-center justify-start w-full gap-2 md:gap-4'>
//                     <div className='flex items-center justify-center gap-1 md:gap-2 rounded-full px-2 py-0.5 md:px-3 md:py-1.4 bg-white group-hover:border-[#7d0ef9] border border-[white] duration-200 transition-all'>
//                       <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                         </svg>
//                       </div>
//                       <div className='event-more-details'>
//                         Location
//                       </div>
//                     </div>
//                     <div className='flex items-center justify-center gap-1 md:gap-2 rounded-full px-2 py-0.5 md:px-3 md:py-1.4 bg-white group-hover:border-[#7d0ef9] border border-[white] duration-200 transition-all'>
//                       <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                       </div>
//                       <div className='event-more-details'>
//                         Cost
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <a href='/' className='register-now md:text-sm text-white w-full rounded-full hover:bg-white hover:border py-1 md:py-2 flex items-center justify-center gap-2 duration-300 transition-all'>
//                 <div className=''>
//                   Register Now
//                 </div>
//                 <div>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 md:w-4 md:h-4">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
//                   </svg>
//                 </div>
//               </a>

//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default index

import React, { useEffect, useState } from 'react'
import '../../components/Cards/styles/style.css'
import Select from 'react-select'
import { HiCurrencyRupee } from 'react-icons/hi';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import altImg from '../../assets/Placeholder.png'
import { motion } from "framer-motion"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../utils/Spinner';
import ReactImageFallback from "react-image-fallback";


const Index = () => {

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      "https://vitvibrance.onrender.com/api/v1.0/events?" +
      new URLSearchParams({
        page: page,
      })
    );
    const data = await response.json();
    console.log(data);

    setItems([...items, ...data.events]);

    setPage(page + 1);
    if (data.events.length === 0) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className='flex flex-col space-y-3'>


      {/* merch mx-5 lg:mx-28 md:mx-10 xl:mx-40 590 787 */}

      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={
          <Spinner color={'#7d0ef9'} />
        }>
        {/*  w-11/12 mdlg1:w-9/12 mdlg2:w-7/12 mdlg3:w-1/2  mx-auto*/}
        <motion.div className='merch grid mb-10 justify-center grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-5 md:w-11/12 md:mx-auto gap-10 items-center'>
          {items.map((item, index) => {
            return <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }} id={index} key={index} variants={cardVariants} className={`hover:shadow-5xl cursor-pointer card-item hover:bg-white group hover:scale-105 transition-all merch-items md:max-w-sm flex flex-col justify-center items-start border space-y-2 rounded-3xl p-3 border-black`}>
              <div className='flex justify-center w-full object-cover object-center hover:cursor-pointer'>
                <div className='relative w-full'>
                  <ReactImageFallback src={item.image ? "https://vitvibrance.onrender.com" + item.image : altImg} fallbackImage={altImg} initialImage={altImg} alt={item.title} className='w-full h-full rounded-xl' />
                  {/* <Suspense><MyImageComponent/></Suspense> */}
                  {/* <img className='w-full h-full rounded-xl' src={item.image? "https://vitvibrance.onrender.com" + item.image:altImg} alt={item.title} /> */}

                </div>
              </div>
              <div className='m-2'><p className='font-secondary font-black text-[28px] leading-[34px]'>{item.title}</p></div>
              <p>{item.description} <br /> <a href='/' target={'_blank'} className='underline font-semibold'> view more </a>
              </p>
              <div className='flex justify-center items-center py-2 pl-2 pr-3 bg-white rounded-3xl space-x-1 place-items-start group-hover:border-[#7d0ef9] border-[#D7FDFF] border transition-all'><span className='p-0.5'><BsFillCalendarCheckFill className='text-sm'/></span><p className='font-bold text-sm'>{item.day}</p></div>
              <div className='flex items-center justify-center gap-2'>
                <div className='flex justify-center items-center py-2 pl-2 pr-3 bg-white rounded-3xl space-x-1 text-sm group-hover:border-[#7d0ef9] border-[#D7FDFF] border transition-all'><span className=' '><HiLocationMarker /></span><p className='text-sm font-bold'>{item.venue}</p></div>
                <div className='flex justify-center items-center py-2 pl-2 pr-3 bg-white rounded-3xl space-x-1 text-sm group-hover:border-[#7d0ef9] border-[#D7FDFF] border transition-all'><span className=' '><HiCurrencyRupee /></span><p className='text-sm font-bold'>{item.cost}</p></div>
              </div>
              <div className='w-full'><button className='register-now w-full justify-center rounded-3xl py-3 text-white font-secondary flex items-center space-x-2'><a href='/' className='font-semibold'>Register Now </a><span className='text-xs'><FaExternalLinkAlt /></span></button></div>
            </motion.div>
          })}

        </motion.div>
      </InfiniteScroll>
    </div>
  )
}

export default Index
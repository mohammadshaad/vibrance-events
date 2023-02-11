import React, { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiOutlineSearch } from 'react-icons/ai';
import './styles/style.css'
import Select from 'react-select'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Index() {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);



    const fetchData = async () => {
        const response = await fetch(
            "https://vitvibrance.onrender.com/api/v1.0/merchandise?" +
            new URLSearchParams({
                page: page,
            })
        );
        const data = await response.json();
        console.log(data);

        setItems([...items, ...data.merchandise]);

        setPage(page + 1);
        if (data.merchandise.length === 0) {
            setHasMore(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);
    const optionsType = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' },
        { value: 'D', label: 'D' }
    ]
    const optionsClub = [
        { value: 'Music Club', label: 'Music Club' },
        { value: 'Dance Club', label: 'Dance Club' },
        { value: 'Enactus', label: 'Enactus' }
    ]
    const optionsVenue = [
        { value: 'AB1', label: 'AB1' },
        { value: 'AB2', label: 'AB2' },
        { value: 'AB3', label: 'AB3' },
        { value: 'Delta Block', label: 'Delta Block' },
        { value: 'Sigma Block', label: 'Sigma Block' }
    ]
    const optionsDay = [
        { value: 'DAY1', label: 'DAY1' },
        { value: 'DAY2', label: 'DAY2' },
        { value: 'DAY3', label: 'DAY3' }
    ]
    // const dummyString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim explicabo cum nam consequuntur saepe provident dolorum eveniet ipsa fugiat tempore, sint harum blanditiis sunt accusantium deleniti commodi numquam exercitationem.';
    const customStyles = {
        control: (base, state) => ({
            ...base,
            border: '1px solid #343D4C',
            borderRadius: '32px',
            padding: '6px 16px',
            '&:hover': {
                border: state.isFocused ? '1px solid #343D4C' : '1px solid #343D4C',
                backgroundColor: '#fff',
                cursor: 'pointer'
            },
            backgroundColor: 'transparent',
            color: '#343D4C',
            fontFamily: 'fredoka',
            '@media (max-width: 375px)': {
                padding: '3px 8px',
                fontSize: '12px',
            },
            '@media (max-width: 200px)': {
                display: 'none'
            },
            innerHeight: '100%',
            '&:focus': {
                backgroundColor: '#fff',
                color: '#343D4C'
            }

        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? '#a8b2c3' : state.isFocused ? '#cbd1db' : null,
            color: state.isSelected ? '#343D4C' : state.isFocused ? '#343D4C' : null,
            '&:hover': {
                cursor: 'pointer'
            },
            '&:active': {
                backgroundColor: '#343D4C',
                color: '#343D4C'
            },
            fontFamily: 'fredoka'
        }),
        menuList: (base) => ({
            ...base,
            padding: '0'
        }),
        singleValue: (base) => ({
            ...base,
            color: '#343D4C',
            fontFamily: 'fredoka'
        }),
        placeholder: (base) => ({
            ...base,
            color: '#343D4C',
            fontFamily: 'fredoka'
        }),
        indicatorSeparator: (base) => ({
            ...base,
            color: '#343D4C'
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: '#343D4C'
        })
    }



    return (
        <>
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>

                <div className='filters flex md:flex-row flex-col-reverse justify-center lg:justify-evenly items-center py-5 lg:space-x-52 md:space-x-20 md:space-y-0 mx-3 w-10/12'>
                    <div className='flex flex-wrap md:space-x-5 mt-5 gap-2 md:mt-0 items-center justify-center w-full'>
                        <Select styles={customStyles} placeholder="Type" options={optionsType} className=''/>
                        <Select styles={customStyles} placeholder="Club" options={optionsClub} />
                        <Select styles={customStyles} placeholder="Venue" options={optionsVenue} />
                        <Select styles={customStyles} placeholder="Day" options={optionsDay} />
                    </div>
                    <div className='flex justify-center focus-within:bg-white hover:bg-white space-x-5 h-full items-center md:px-5 pl-5 md:w-auto w-auto mx-4 pr-10 py-2 border-black border rounded-[32px] text-xl'>
                        <label htmlFor='search'>
                            <AiOutlineSearch className='hover:cursor-pointer' />
                        </label>
                        <input className='bg-transparent focus:outline-none text-lg w-full' id='search' placeholder='Search..' type="text" />
                    </div>
                </div>




                {/* <div className='flex items-center justify-start gap-2 md:gap-6 w-full md:w-3/4 h-full'>
                    <div className='appFilters flex items-center justify-center gap-2 rounded-full px-2 py-0.5 md:px-6 md:py-2'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='filter-item text-sm'>
                            Dance Club
                        </div>
                    </div>
                    <div className='appFilters flex items-center justify-center gap-2 rounded-full px-2 py-0.5 md:px-6 md:py-2'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='filter-item text-sm'>
                            AB1
                        </div>
                    </div>
                    <div className='appFilters flex items-center justify-center gap-2 rounded-full px-2 py-0.5 md:px-6 md:py-2'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='filter-item text-sm'>
                            DAY 1
                        </div>
                    </div>

                </div> */}

            </div>
        </>
    )
}

export default Index

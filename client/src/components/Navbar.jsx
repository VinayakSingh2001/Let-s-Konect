import React from 'react'

const Navbar = () => {
    return (
        <div className='flex bg-black '>
            <div className="flex p-6 w-full ml-8 mr-8 justify-between">
                <div className="logo text-white text-2xl">
                    <h2>iQuiz</h2>
                </div>
                <div className='flex gap-5'>
                    <div className="search bg-white rounded-full p-2 cursor-pointer  hover:bg-gray-300 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>

                    <button className='bg-white rounded-md  hover:bg-gray-300 hover:text-black '>
                        <h3 className='text-black text-xs pl-4 pr-4'>Help Center</h3>
                    </button>

                    <button className='bg-white rounded-md  hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Go to Runway</h3>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Navbar

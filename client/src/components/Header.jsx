import React from 'react'

const Header = () => {
    return (
        <div className='flex bg-black '>
            <div className="flex pt-10 pb-10 w-full ml-14 ">
                <div className='flex gap-3'>
                    <button className='"bg-black rounded-lg  hover:bg-white border border-gray-300'>
                        <h3 className='text-white  hover:text-black text-xs pl-4 pr-4'>All</h3>
                    </button>
                    <button className='bg-white rounded-md hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>AI Training</h3>
                    </button>
                    <button className='bg-white rounded-md p-1 hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Runway Mobile</h3>
                    </button>
                    <button className='bg-white rounded-md hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>AI Magic Tools</h3>
                    </button>
                    <button className='bg-white rounded-md p-1 hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Gen-1</h3>
                    </button>
                    <button className='bg-white rounded-md hover:bg-gray-300 hover:text-black'>
                        <h3 className='text-black text-xs pl-4 pr-4'>Getting Started</h3>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header

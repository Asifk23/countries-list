import React from 'react'

const Countries = ({ flag, countryName, region }) => {
    return (
        <div className='h-auto w-full border border-2 border-primary flex items-center p-5 bg-white shadow'>
            <div className='flex items-center'>
                <div className='w-20'>
                    <img src={flag} alt="" />
                </div>
                <div className='w-auto ml-4'>
                    <h3 className='text-base md:text-lg font-semibold font-primary'>{countryName}</h3>
                    <p className='text-sm md:text-base font-darkgrey'>{region}</p>
                </div>
            </div>

        </div>
    )
}

export default Countries
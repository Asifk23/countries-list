import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center py-10">

            <div className='md:w-96 w-max'>
                <SocialIcons />
            </div>

            <div className='mt-10 text-center'>
                <a href="mailto:" className='font-semibold font-primary text-base'>emaple@mail.com</a>
                <p className='font-primary text-sm'>Copyright © 2020 Name. All rights reserved.</p>
            </div>
        </footer>)
}

export default Footer
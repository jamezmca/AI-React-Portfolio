import React from 'react'

export default function Navbar() {
    const links = [
        ['LinkedIn', 'https://www.linkedin.com/in/jamezmcarthur/'],
        ['GitHub', 'https://github.com/jamezmca'],
        ['YouTube', 'https://www.youtube.com/c/Smoljames']
    ]

    return (
        <div className='sticky-0 flex justify-between items-center gap-4 sm:gap-8 p-4 text-xs sm:text-sm'>
            <a className='text-sm sm:text-base' href='/'>JM</a>
            <div className='flex items-center gap-4'>
                {links.map((link, index) => {
                    return (
                        <a key={link[1]} href={link[1]} target="_blank">{link[0]}</a>
                    )
                })}
            </div>
        </div>
    )
}

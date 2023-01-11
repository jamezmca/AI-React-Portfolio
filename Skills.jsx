import React from 'react'

export default function Skills() {
    const ski = {
        JavaScript: ['React', 'React Native', 'SvelteKit', 'Node.js'],
        Python: ['Data Analysis', 'Django', 'Visualization']
        ,
        Web: ['Sass', 'TailwindCSS', 'Firebase', 'NoSQL', 'SQL', 'Heroku', 'Netlify', 'AWS', 'GIT', 'Docker', 'Kubernetes', 'GCP'],
        Design: ['Canva', 'Pixlr']
    }

    return (
        <div className='shadow-xl p-3 bg-white rounded flex flex-col gap-4 relative z-10'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-3xl '>Info</h1>
                <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                    <h3 className='font-semibold'>Email</h3>
                    <a href="mailto:demoemail@gmail.com" className='text-cyan-500'>demoEmail@gmail.com
                    </a>
                </div>
                <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                    <h3 className='font-semibold'>GitHub</h3>
                    <a href="https://github.com/jamezmca" target="_blank" className='text-cyan-500'>jamezmca
                    </a>
                </div>
                <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                    <h3 className='font-semibold'>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/jamezmcarthur/ "
                        target="_blank" className='text-cyan-500'>James McArthur
                    </a>
                </div>
                <div className='flex items-center gap-1 text-base relative after:absolute after:bottom-0 after:w-full after:h-[2px] after:right-full after:bg-purple-500 hover:after:translate-x-full after:duration-300 overflow-hidden'>
                    <h3 className='font-semibold'>YouTube</h3>
                    <a href="https://youtube.com/smoljames"
                        target="_blank" className='text-cyan-500'>Smoljames
                    </a>
                </div>
            </div>
            <div>
                <h1 className='text-4xl '>Skills</h1>
                <div
                    className='flex flex-col gap-1'>
                    {Object.keys(ski).map((keyName, index) => {
                        return (
                            <div key={index}>
                                <h3 className='text-lg'>{keyName}</h3>
                                <div className='flex items-stretch gap-2 overflow-scroll'>
                                    {ski[keyName].map((skill, i) => {
                                        return (
                                            <div key={i} className="rounded bg-gradient-to-r from-blue-700 to-violet-700 text-white px-2 py-1 text-xs whitespace-nowrap">
                                                {skill}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-4xl'>Just For Fun</h1>
                <div className='flex items-center flex-wrap text-lg p-4 gap-2'>
                    <i className="fa-solid fa-dog"></i>
                    <i className="fa-solid fa-rocket"></i>
                    <i className="fa-solid fa-ghost"></i>
                    <i className="fa-solid fa-mug-hot"></i>
                    <i className="fa-solid fa-snowflake"></i>
                </div>
            </div>
        </div>
    )
}

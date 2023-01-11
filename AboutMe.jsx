import React from 'react'

export default function AboutMe(props) {
    const { openModal } = props


    return (
        <div className='flex flex-col md:grid md:grid-cols-2 '>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center'>

                    <h1 className='font-bold text-4xl sm:text-6xl'>James McArthur</h1>
                    <img className='mx-auto md:hidden h-[200px] aspect-square rounded-full shadow-lg ' src="https://media.licdn.com/dms/image/C5603AQG6Q4W3kWANtw/profile-displayphoto-shrink_200_200/0/1630988410582?e=1678924800&v=beta&t=wF_zjJsH0TI8k4ZksGQbGCx3vjHGHXgzbGL6MlRaOYg" alt="me" />
                </div>
                <h2 className='font-medium text-slate-800 text-lg sm:text-2xl'>Software Engineer | Content Creator</h2>
                <p className='text-slate-500'>I absolutely love to create fun and interesting sites using the latest and greatest technology. My sites will be better than yours, no doubts about it!</p>
                <div className='my-10 flex items-center gap-4 text-sm sm:text-base'>
                    <button onClick={openModal} className='rounded-full bg-gradient-to-r from-blue-700 to-violet-700 text-white px-4 py-2 hover:opacity-70'>projects</button>
                    <a href="mailto:youremail@gmail.com" className='rounded-full text-purple-800 border border-solid border-violet-800 px-4 py-2 hover:opacity-70'>contact</a>
                </div>
            </div>
            <img className='mx-auto hidden md:flex h-[200px] aspect-square rounded-full shadow-lg ' src="https://media.licdn.com/dms/image/C5603AQG6Q4W3kWANtw/profile-displayphoto-shrink_200_200/0/1630988410582?e=1678924800&v=beta&t=wF_zjJsH0TI8k4ZksGQbGCx3vjHGHXgzbGL6MlRaOYg" alt="me" />
        </div>
    )
}

import React from 'react'
import ReactDom from 'react-dom'

export default function Modal(props) {
    const { onClose } = props
    const projects = [
        { name: 'asdkjasd', link: 'asdasd', desc: ' asdasdfashkdfjhasldkf jhasdlkjf haslkdjf halksjd hflka sjhdflkajs hdflkjah sdlkjf haskljdf halskd', github: 'as dasdasdasd' },
        { name: 'asdkjasd', link: 'asdasd', desc: ' asdasdfashkdfjhasldkf jhasdlkjf haslkdjf halksjd hflka sjhdflkajs hdflkjah sdlkjf haskljdf halskd', github: 'as dasdasdasd' },
        { name: 'asdkjasd', link: 'asdasd', desc: ' asdasdfashkdfjhasldkf jhasdlkjf haslkdjf halksjd hflka sjhdflkajs hdflkjah sdlkjf haskljdf halskd', github: 'as dasdasdasd' },
    ]


    return ReactDom.createPortal(
        <div className='absolute top-0 left-0 w-screen h-screen text-white md:h-[80%] shadow bg-slate-900 overflow-scroll z-50 flex flex-col  gap-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:h-[90vh]'>
            <div className='flex p-4 text-xl justify-between items-center'>
                <h2>Projects</h2>
                <i onClick={onClose} className="fa-solid cursor-pointer fa-xmark text-white hover:rotate-[30deg]"></i>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1 bg-white md:p-1'>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="w-full md:h-[200px] aspect-video bg-slate-900 text-white flex flex-col gap-2 p-2">
                            <h1>{project.name}</h1>
                            <p className='text-xs flex-1'>{project.desc}</p>
                            <div className='grid text-center grid-cols-2'>
                                <a className=''>
                                    Live
                                </a>
                                <a>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>,
        document.getElementById('portal')
    )
}

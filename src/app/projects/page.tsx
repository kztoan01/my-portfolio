import Image from "next/image"
import melo from '../../../public/assets/images/Melologo.png'
import arthub from '../../../public/assets/images/ArtHub-only-logo.png'
import iot from '../../../public/assets/images/iotlogo.svg'
import devnote from '../../../public/assets/images/devnote.svg'
import Link from "next/link"
//import vercel from  '../../public/assets/images/vercel.svg'
function Projects() {

    const projects = [
        {
            img: arthub,
            name: 'ArtHub',
            description: 'The platform offers courses in every genre from art to engineering.',
            link: '/projects/arthub',
            prop: 'academy.arthub.com',
        },
        {
            img: iot,
            name: 'TempSpace',
            description: 'An IoT based project for monitor temperature anywhere if the internet connection is available.',
            link: 'https://github.com/kztoan01/temp-space.git',
            prop: 'github.com',
        },
        {
            img: melo,
            name: 'Melo',
            description: 'Melo is a digital music service that gives you access to millions of songs.',
            link: '#',
            prop: 'music.melo.com',
        },

        {
            img: devnote,
            name: 'DevNote',
            description: 'A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support.',
            link: '#',
            prop: 'devnote.com',
        },
    ]

    return (
        <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                    Things I’ve made trying to conquer the multiverse.</h1>
                                <p className="leading-7 mt-6 text-base text-zinc-600 dark:text-zinc-400">Over the years, I have worked on many different types of projects, but these are the ones I am most proud of. Since many of them are open-source, you may check out the code and contribute any suggestions you may have for improving them if you find something that interests you.</p>
                            </header>
                            <div className="mt-16 sm:mt-20">
                                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                                    {projects.map((project) => (
                                        <Link href={project.link} key={project.name}><li className="group relative flex flex-col items-start">
                                            <div 
                                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                                <Image alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                                                    className="h-8 w-8 object-cover object-center rounded-full" src={project.img}
                                                /></div>
                                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                                <div
                                                    className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                                                </div><a href={project.link} target="_blank"><span
                                                    className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                                                        className="relative z-10">{project.name}</span></a>
                                            </h2>
                                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                                            <p
                                                className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                                                    <path
                                                        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                                                        fill="currentColor"></path>
                                                </svg><span className="ml-2">{project.prop}</span></p>
                                        </li></Link>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects
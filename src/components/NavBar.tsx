"use client"
import myImg from './assets/images/toan.jpg'
import Link from 'next/link'
import Footer from './Footer'
import Image from 'next/image'
import toan from '../../public/assets/images/toan.jpg'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathName = usePathname();

    const siteRoute = [
        {
            href: '/about',
            name: 'About'
        },
        {
            href: '/articles',
            name: 'Articles'
        },
        {
            href: '/projects',
            name: 'Projects'
        },
        // {
        //     href: '/speaking',
        //     name: 'Speaking'
        // }, 
        {
            href: '/uses',
            name: 'Uses'
        }

    ]

    return (
        <header className="pointer-events-none relative z-50 flex flex-none flex-col">
            <div className="top-0 z-10 h-16 pt-6">
                <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
                    <div className="mx-auto w-full max-w-7xl lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="relative flex gap-4">
                                    <div className="flex flex-1">
                                        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                                            <Link href={'/'} aria-label="Home" className="pointer-events-auto">
                                                <Image className="cursor-pointer rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                                    src={toan} alt=''
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='flex flex-1 justify-end md:justify-center'>
                                        {/* resonsive nav bar */}
                                        {/* main nav bar */}
                                        <nav className='pointer-events-auto hidden md:block'>
                                            <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                                                {siteRoute.map((site) => (
                                                    <li key={site.href}>
                                                        <Link href={site.href} className={`cursor-pointer relative block px-3 py-2 transition ${pathName === site.href ? "text-teal-500 dark:text-teal-400" : "hover:text-teal-500 dark:hover:text-teal-400"} `}>
                                                            {site.name}
                                                            {pathName === site.href ? <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0'></span> : <></>}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='flex justify-end md:flex-1'>
                                        <div className='pointer-events-auto'>
                                            <button type='button' className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'>
                                                <svg className='hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500'><path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" stroke-width="1.5" stroke-linecap="round" strokeWidth="round"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
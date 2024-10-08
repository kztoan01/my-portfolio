"use client"

import toan2 from  '../../public/assets/images/profile-pic.jpg'
import { AcademicCapIcon } from '@heroicons/react/solid';
import Card3D from '@/components/Card3D'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import useDownloader from "react-use-downloader";
import Link from 'next/link';
import arthub from '../../public/assets/images/ArtHub-only-logo.png'
import fpt from '../../public/assets/images/fsoft.png'
import nutritrack from '../../public/assets/images/nutritrack.jpg'
import tripwonder from '../../public/assets/images/tripwonder.jpg'
import sync from '../../public/assets/images/sync.jpg'
import Image from 'next/image';
export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const images = [
    { name: 'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2', img: 'https://townsquare.media/site/812/files/2018/12/21-savage-2.jpg?w=1080&h=1080&q=75' },
    { name: 'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2', img: 'https://upload.wikimedia.org/wikipedia/en/6/6e/21_Savage_and_Metro_Boomin_-_Savage_Mode.png' },
    { name: 'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2', img: 'https://i.scdn.co/image/ab67616d0000b2737d384516b23347e92a587ed1' },
    { name: 'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2', img: 'https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/JF_OFFSEASON_0054_050321_EDIT_001_EXPLICIT_R_kksp7v/i-the-off-season-i-cover-art.jpg' },
    { name: 'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2', img: 'https://upload.wikimedia.org/wikipedia/en/1/10/MigosCulture.jpg' },

  ]

  const { size, elapsed, percentage, download,
    cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/assets/files/ToanCV.pdf";
  const filename = "21savage.png";
  const openCV = (cv: string) => {
    window.open(cv)
  }
  const contact = [
    {
      link: 'https://twitter.com/yothatstoan',
      name: 'flex',
      platform: 'Follow on Twitter',
      icon: <svg viewBox="0 0 24 24" aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
        <path
          d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z">
        </path>
      </svg>
    },
    {
      link: 'https://www.instagram.com/yothats.toan/?hl=en',
      name: 'mt-4 flex2',
      platform: 'Follow on Instagram',
      icon: <svg viewBox="0 0 24 24" aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
        <path
          d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
        </path>
        <path
          d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z">
        </path>
      </svg>
    },
    {
      link: 'https://github.com/kztoan01',
      name: 'mt-4 flex',
      platform: 'Follow on GitHub',
      icon: <svg viewBox="0 0 24 24" aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
        </path>
      </svg>
    },
    {
      link: 'https://www.facebook.com/yothats.toan/',
      name: 'mt-4 flex',
      platform: 'Follow on Facebook',
      icon: <svg aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
      </svg>
    },
  ]
  const works = [
    {
      img: nutritrack,
      company: 'NutriTrack',
      role: 'Founder/CEO',
      start: '2023',
      end: 'Present'
    },
    {
      img: tripwonder,
      company: 'TripWonder',
      role: 'Founder/CEO',
      start: '2023',
      end: 'Present'
    },
    {
      img: fpt,
      company: 'FPT Software',
      role: 'Backend Software Engineer',
      start: '2023',
      end: '2024'
    },
    {
      img: sync,
      company: 'Sync',
      role: 'iOS Engineer',
      start: '2022',
      end: '2023'
    },
    {
      img: arthub,
      company: 'ArtHub',
      role: 'Founder/CEO',
      start: '2020',
      end: '2022'
    },
    // {
    //   img: 'https://pbs.twimg.com/profile_images/1664295684940484608/WtSiqLK6_400x400.jpg',
    //   company: 'Microsoft',
    //   role: 'Software Engineer',
    //   start: '2018',
    //   end: '2020'
    // }, {
    //   img: 'https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0=w240-h480-rw',
    //   company: 'Airbnb',
    //   role: 'Product Designer',
    //   start: '2016',
    //   end: '2018'
    // },

  ]

  const articles = [
    {
      date: 'December 12, 2023',
      title: 'Create Data Transfer Objects (DTOs) with C#',
      link: '/articles/create-data-transfer-objects-with-csharp',
      description: 'A DTO (Data Transfer Object) is an object that defines how data will be sent between applications. It’s used only to send and receive data and does not contain in itself any business logic. The use of DTOs is very common in web development with ASP.NET Core as they provide solutions for many needs.'
  }, 
    {
      date: 'December 8, 2023',
      title: 'Embedded system monitors temperature using Blynk',
      link: '/articles/embedded-system-monitors-temperature-using-blynk',
      description: 'We will see how to make ESP8266 LoRa Gateway for Arduino and LM35 temperature sensor. The temperature can be monitored from any part of the world with Blynk if the internet connection is available.'
  },
  {
      date: 'December 1, 2023',
      title: 'Academy platform provides online drawing courses',
      link: '/articles/academy-platform-provides-online-drawing-courses',
      description: 'ArtHub courses are video-based experiences that give students the chance to learn actionable skills. Whether you have experience teaching, or it’s your first time, we’ll help you package your knowledge into an online course that improves student lives.'
  },
  ]
  return (
    <main className="font-sans flex-auto mt-16">
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl flex">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Software designer, founder, and conqueror.</h1>
                <p className="leading-7 mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m Toan, a full-stack software engineer and entrepreneur based in Ho Chi Minh City. 
                  I’m the founder and CEO of NutriTrack and TripWonder, 
                  where we build the future and introduce Vietnam to the world.
                </p>
                <div className="mt-6 flex gap-6">
                  {contact.map((c) => (
                    <a key={c.platform} className="group -m-1 p-1" aria-label={c.platform}
                      href={c.link} target="_blank">
                      {c.icon}
                    </a>
                  ))}

                </div>
              </div>
              <Card3D />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <motion.div style={{ x }} className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {images.map((image) => (
            <div key={image.img}
              className={image.name}>
              <img alt="" loading="lazy" width="3744" height="5616" decoding="async" data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 640px) 18rem, 11rem"
                src={image.img}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  {articles.map((article) => (
                    <article key={article.title} className="group relative flex flex-col items-start">
                      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div
                          className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                        </div>
                        <Link href={article.link}>
                          <span
                            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl">
                          </span>
                          <span
                            className="relative z-10">
                            {article.title}
                          </span>
                        </Link>
                      </h2>
                      <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                        <span className="absolute inset-y-0 left-0 flex items-center"
                          aria-hidden="true">
                          <span
                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500">
                          </span>
                        </span>{article.date}
                      </time>
                      <p className="leading-6 relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {article.description}
                      </p>
                      <div aria-hidden="true"
                        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                        Read article
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                          className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5"
                            strokeLinecap="round" stroke-linejoin="round">

                          </path>
                        </svg>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <form
                    className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"><svg
                      viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
                      stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                      <path
                        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                      </path>
                      <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                        className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                    </svg><span className="ml-3">Stay up to date</span></h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get notified when I publish
                      something new, and unsubscribe at any time.</p>
                    <div className="mt-6 flex"><input placeholder="Email address" aria-label="Email address"
                      required
                      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                      type="email" />
                      {/* <Link href={"/thank-you"}> */}
                        <button
                        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                        type="button">
                          Join
                        </button>
                        {/* </Link> */}
                        </div>
                  </form>
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"><svg
                      viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
                      stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                      <path
                        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                      </path>
                      <path
                        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                        className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                    </svg><span className="ml-3">Work / Education</span></h2>
                    <ol className="mt-6 space-y-4">
                      {works.map((work) => (
                        <li key={work.company} className="flex gap-4">
                          <div
                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image alt="" loading="lazy" width="32" height="32" decoding="async"
                              data-nimg="1" className="h-7 w-7 object-cover object-center rounded-full"
                              src={work.img}
                            /></div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd
                              className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {work.company}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">{work.role}</dd>
                            <dt className="sr-only">Date</dt>
                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label="2019 until Present"><time>{work.start} </time>
                              <span aria-hidden="true">—</span> <time
                              >{work.end}</time></dd>
                          </dl>
                        </li>
                      ))}
                    </ol><a href='https://drive.google.com/file/d/1brg0eY1EDhmuKmWHJYmgGdVPnoM2QgI0/view?usp=sharing' target='_blank'
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                    >Download CV<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                      className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                        <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5"
                          strokeLinecap="round" stroke-linejoin="round"></path>
                      </svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    //cv link: https://drive.google.com/file/d/1R4U362QVM0RHatl8aXwgCa6ZjSYl-mTU/view?usp=sharing
    // <BrowserRouter>
    //   <ScrollToTop>
    //     <div className='overflow-x-hidden font-sans flex h-full bg-yellow-200 dark:bg-black'>
    //       <div className='flex w-full'>
    //         <div className="fixed inset-0 flex justify-center sm:px-8">
    //           <div className="flex w-full max-w-7xl lg:px-8">
    //             <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
    //           </div>
    //         </div>
    //         <div className="relative flex w-full flex-col">
    //           <Routes>
    //             <Route path="*" element={
    //               <>
    //                 <NotFound />
    //               </>
    //             }>
    //             </Route>
    //             <Route path='/' element={
    //               <>
    //                 <NavBar isActive='null' />
    //                 <HomePage />
    //                 <Footer />
    //               </>
    //             } />
    //             <Route path='/about' element={
    //               <>
    //                 <NavBar isActive='about' />
    //                 <AboutPage />
    //                 <Footer />
    //               </>
    //             } />
    //             <Route path='/articles' element={
    //               <>
    //                 <NavBar isActive='articles' />
    //                 <Articles />
    //                 <Footer />
    //               </>
    //             } />
    //             <Route path='/projects' element={
    //               <>
    //                 <NavBar isActive='projects' />
    //                 <Projects />
    //                 <Footer />
    //               </>
    //             } />
    //             <Route path='/projects/arthub' element={
    //               <>
    //                 <NavBar isActive='projects' />
    //                 <ArtHub />
    //                 <Footer />
    //               </>
    //             } />
    //             <Route path='/speaking' element={
    //               <>
    //                 <NavBar isActive='speaking' />
    //                 <Speaking />
    //                 <Footer />
    //               </>
    //             } />
    //             <Route path='/uses' element={
    //               <>
    //                 <NavBar isActive='uses' />
    //                 <Uses />
    //                 <Footer />
    //               </>
    //             } />
    //           </Routes>
    //         </div>

    //       </div>
    //     </div>
    //   </ScrollToTop>
    // </BrowserRouter>
  )
}

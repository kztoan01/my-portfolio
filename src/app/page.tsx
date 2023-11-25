"use client"

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import AboutPage from '@/app/about/About'
import HomePage from '@/components/HomePage'
import Card3D from '@/components/Card3D'
import NotFound from '@/components/Notfound'
import Uses from '@/components/Uses'
import Articles from '@/components/Articles'
import Projects from '@/components/Projects'
import ArtHub from '@/components/ArtHub'
import Speaking from '@/components/Speaking'
import ScrollToTop from '@/components/ScrollToTop'
export default function Home() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className='overflow-x-hidden font-sans flex h-full bg-yellow-200 dark:bg-black'>
          <div className='flex w-full'>
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <Routes>
                <Route path="*" element={
                  <>
                    <NotFound />
                  </>
                }>
                </Route>
                <Route path='/' element={
                  <>
                    <NavBar isActive='null' />
                    <HomePage />
                    <Footer />
                  </>
                } />
                <Route path='/about' element={
                  <>
                    <NavBar isActive='about' />
                    <AboutPage />
                    <Footer />
                  </>
                } />
                <Route path='/articles' element={
                  <>
                    <NavBar isActive='articles' />
                    <Articles />
                    <Footer />
                  </>
                } />
                <Route path='/projects' element={
                  <>
                    <NavBar isActive='projects' />
                    <Projects />
                    <Footer />
                  </>
                } />
                <Route path='/projects/arthub' element={
                  <>
                    <NavBar isActive='projects' />
                    <ArtHub />
                    <Footer />
                  </>
                } />
                <Route path='/speaking' element={
                  <>
                    <NavBar isActive='speaking' />
                    <Speaking />
                    <Footer />
                  </>
                } />
                <Route path='/uses' element={
                  <>
                    <NavBar isActive='uses' />
                    <Uses />
                    <Footer />
                  </>
                } />
              </Routes>
            </div>

          </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  )
}

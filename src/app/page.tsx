"use client"

import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import AboutPage from '@/components/AboutPage'
import HomePage from '@/components/HomePage'
import Card3D from '@/components/Card3D'
import NotFound from '@/components/Notfound'
export default function Home() {
  return (
    <BrowserRouter>
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
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}

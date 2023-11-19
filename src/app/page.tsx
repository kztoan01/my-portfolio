import Image from 'next/image'
import AboutPage from '@/components/AboutPage'
export default function Home() {
  return (
    <div className='flex h-full bg-yellow-200 dark:bg-black'>
      <AboutPage isActive={true} />
    </div>
  )
}

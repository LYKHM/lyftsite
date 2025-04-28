import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-white-900'>
    <div className='max-w-screen-xl mx-auto px-5'>
      <div className='flex items-center justify-between py-4'>
        
        <a href='/'>
          <img src="../src/assets/thelogo.png" alt="logo" className='w-10 h-10' />
        </a>
        
         
        <div className='flex-grow flex justify-center space-x-6'>
          <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          <Link to="/policy" className="hover:text-gray-300">Privacy Policy</Link>
        </div>

      </div>
    </div>

    <div className='max-w-screen-xl mx-auto px-5 '>
      <main className='grid lg:grid-cols-2 place-items-center py-4 md:py-12'>
        <div className='pb-2 px-6 md:order-1 md-block'>
          <picture>
            <img src='../src/assets/Demo 3.png' />
          </picture>
        </div>

        <div>
          <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter'>Track your calories with just a picture.</h1>
          <p className='text-lg text-slate-600 max-w-xl mt-7'>
          Introducing Lyft One Ai, the AI-powered app that simplifies calorie tracking.
          Snap a photo or scan a barcode, and Lyft One AI instantly calculates calories and nutrients. 
          Stay on track with personalized insights and smart reminders to reach your fitness goals faster! 
          </p>
          <picture className='p-1'>
            <img src='../src/assets/appstore.png' alt="Appstore link" loading="eager" width="199" height="166"/>
          </picture>
        </div>
      </main>
      <p className='text-center text-xs text-slate-500 mt-1 mb-2'>Made with Love ❤️</p>
    </div>
  </div>
  )
}

export default Home
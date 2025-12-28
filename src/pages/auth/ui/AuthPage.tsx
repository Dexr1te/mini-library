import { Outlet } from 'react-router'

export const AuthPage = () => {
  return (
    <section className='flex min-h-screen bg-[#1a1a1a]'>
      <div className='bg-[#363636] md:w-6/10 sr-only md:not-sr-only'>
      </div>
      
      <div className='flex w-full justify-center items-center bg-[#1a1a1a] md:w-4/10 pt-10 '>
      <Outlet />
      </div>
    </section>
  )
}
import { Outlet } from 'react-router'
import { Navbar } from '@/widgets/navbar/index'
import { Footer } from '@/widgets/footer'

function App() {
  return (
    <>
    <Navbar />
    <main className='pt-[var(--navbar-height)]'>
      <Outlet />
    </main>
    <Footer />
    </>
  )
} 

export default App

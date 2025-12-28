import imgHero from './img/heroImage.jpg'
import ActiveButton from '../../../shared/buttons/ActiveButton'
import AnchorButton from '../../../shared/buttons/AnchorButton'
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import searchIcon from './img/searchIcon.png'
import { RiLoginCircleFill } from "react-icons/ri";
import { SiSimplenote } from "react-icons/si";
import { Link } from 'react-router';

export const Landing = () => {
  return (
    <main className='container items-center justify-between mx-auto pt-2 w-full '>
      {/* ---------- HERO ---------- */}
       <section className='container flex flex-col justify-center'>
        <div className='flex flex-col items-center w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <h1 className='font-bold text-6xl mb-10 md:mb-16 px-3'>Welcome to Mini Library</h1>
          <div className='md:flex px-3 w-full justify-between'>
            <div className='flex flex-col justify-between'>
              <div>
                <h3 className='font-bold text-3xl pb-5' >
                  Intro
                </h3>
                <p className='max-w-150 md:text-lg'>
                Keep your reading world neat, smart, and inspiring.
  With Mini Library, you can easily manage your favorite books, log what you've read, add new titles, and even note down your impressions or favorite quotes.
  From timeless classics to new discoveries — everything stays perfectly organized and ready for your next reading adventure.
                </p>
              </div>
              <div className='flex pt-10 gap-2 order-2 md:order-1'>
                <ActiveButton path='/auth'>Get Started</ActiveButton>
                <AnchorButton toSection='#features'>Learn More</AnchorButton>
              </div>
            </div>

            <div className='sr-only md:not-sr-only '>
              <img src={imgHero} alt="Books Illustration" className='max-h-100' />
            </div>
            
          </div>
        </div>
      </section>
      {/* ---------- FEATURES ---------- */}
      <section id='features' className='container flex flex-col justify-center mt-20'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <h2 className='font-bold text-6xl mb-10 md:mb-16 px-3 flex items-center justify-center'>Features</h2>
          <div className='flex justify-between items-center'>
              <div className='flex flex-col items-center justify-center w-1/3'>
                <h3 className='flex font-bold text-3xl pb-5 gap-1 justify-center items-center'>{<FaBook className='w-7'/>} Add & Edit Books</h3>
                <p className='md:text-lg'>Easily manage your library and keep everything organized.</p>
              </div>
              <div className='flex flex-col items-center justify-center w-1/3'>
                <h3 className='flex font-bold text-3xl pb-5 gap-1 justify-center items-center'>{<FaSearch className='w-7'/>} Search & Filter</h3>
                <p className='md:text-lg'>Find books by title, author, or genre in seconds so easily. </p>
              </div>
              <div className='flex flex-col items-center justify-center w-1/3'>
                <h3 className='flex font-bold text-3xl pb-5 gap-1 justify-center items-center'>{<GrStorage className='w-7'/>} Local Storage</h3>
                <p className='md:text-lg '>Your collection stays saved even after refreshing the page.</p>
              </div>
          </div>
        </div>
      </section>
      {/* ---------- DEMO / GALLERY ---------- */}
      <section id='preview' className='mt-20 mx-5'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <h2 className='font-bold text-6xl mb-10 md:mb-16 px-3 flex items-center justify-center'>App Preview</h2>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-row-reverse items-start justify-center gap-4 '>
              <img src={searchIcon} alt="App screenshot 1" className='w-40 h-40'/>
              <p className='text-sm md:text-lg max-w-100 md:max-w-178'> Discover a vast and ever-growing catalog filled with books of every genre and era — 
        from timeless classics to the latest bestsellers. Our intelligent search system helps 
        you instantly locate exactly what you're looking for, while smart filters let you browse 
        by author, topic, or mood. Whether you're expanding your personal library or exploring 
        something completely new, Mini Library makes discovery effortless and engaging. </p> 
            </div>
            <div className='flex items-start justify-center gap-4 '>
              <RiLoginCircleFill className='w-40 h-40 text-blue-400 shrink-0'/>
              <p className='text-sm md:text-lg max-w-100 md:max-w-178'>  Sign up to unlock the full potential of your reading journey. Once logged in, you can 
        create a personalized book collection, mark your favorites, and track your reading progress 
        across multiple devices. Your preferences and data are securely stored, allowing you to 
        pick up right where you left off — whether you’re at home, at work, or on the go. 
        Reading becomes more organized, meaningful, and uniquely yours. </p> 
            </div>
            <div className='flex flex-row-reverse items-start justify-center gap-4 '>
              <SiSimplenote className='w-40 h-40 text-red-300 shrink-0'/>
              <p className='text-sm md:text-lg max-w-100 md:max-w-178'>  Experience a beautifully minimal, distraction-free interface designed with readers in mind. 
        Every part of the app focuses on clarity and simplicity — from the intuitive navigation to 
        seamless transitions between pages. You won’t waste time figuring out how things work; 
        instead, you’ll spend it discovering new stories and managing your collection with ease. 
        Mini Library turns everyday book management into a smooth, inspiring experience. </p> 
            </div>
          </div>
        </div>
      </section>
      {/* ---------- CALL TO ACTION ---------- */}
      <section id='end' className='mt-20 mx-5 mb-10'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <h2 className='font-bold text-6xl mb-10 md:mb-16 px-3 flex items-center justify-center'>Ready to build your own collection?</h2>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className='text-sm md:text-lg'>Create your first personalized book list today and start building the reading space you've always wanted. <br />
  Add your favorite titles, group them by mood or genre, and watch your library grow into something truly yours.</p>
            <div className='flex items-center gap-3 pt-3'>
              <ActiveButton path='/auth'>Sign Up</ActiveButton>
              <Link to='/catalog' className='underline'>Browse as guest</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
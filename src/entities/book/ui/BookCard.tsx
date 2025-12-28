import type { Book } from '../model/type'


export const BookCard = ({title , genre , author , image , year , timeForReading , description}: Book) => {
  return (
    <div className='flex md:flex-col flex-none w-full md:w-[250px] max-h-[500px] bg-white mx-auto shadow-md'>
      <div className='flex justify-center p-8 bg-amber-100 min-h-56'>
        <img src={image} alt="Image of Book" className='w-35 h-40'/>
      </div>
      <div className='flex gap-1 p-3 w-full h-2/5'>
        <div className='flex flex-col w-full gap-3 p-3'>
          <div>
            <div className='inline-block bg-amber-100 px-2 py-1 rounded-md'>
              <p className='text-sm font-light'>{genre}</p>
            </div>
          </div>
          <h1 className='text-2xl font-semibold font-serif line-clamp-1'>{title}</h1>
          <h3 className='text-lg font-medium text-gray-500'>{author}</h3>

          <div className='flex gap-3'>
            <span className='text-xs text-gray-400 tracking-wide line-clamp-1'>{year}</span>
            <span className='text-xs text-gray-400 tracking-wide line-clamp-1'>{timeForReading}-minute to read</span>
          </div>
        </div>
        <div className='md:hidden text-sm'>
          {description}
        </div>
      </div>
    </div>
  )
}

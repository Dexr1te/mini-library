import type { Genre } from '@/entities/book/model/type';
import type { ProductFilters } from '@/shared/api/bookApi'
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';

type Props = {
    onChange: (filters: ProductFilters) => void;
}

const genres: Genre[] = [
    "Fantasy",
    "Classic",
    "Drama",
    "Dystopian",
    "Romance",
    "Thriller",
    "Philosophical Fiction",
    "Horror",
    "Post-apocalyptic",
    "Psychological Thriller",
    "Science Fiction",
    "Historical Drama",
    "Adventure",
    "Mystery",
    "Self-help",
  ];
  

export const ProductListFilters = ({onChange}: Props) => { 
    const [search , setSearch] = useState<ProductFilters['search']>('');
    const debouncedSearch= useDebounce(search);
    const [genre, setGenre] = useState<ProductFilters['genre']>();
    const [longestToRead , setlongestToRead] = useState<ProductFilters['longestToRead']>(false);

    useEffect(() => {
        onChange({ longestToRead , genre , search: debouncedSearch })
    } ,[genre , longestToRead , debouncedSearch]);

  return (
    <div className='flex items-center justify-around mx-auto w-full mb-10 mt-2'>
        <form className="flex items-center max-w-sm">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                   <FaSearch className='text-gray-300'/>
                </div>
                <input 
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search Product...'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
            </div>
        </form>

        {/* SELECT FILTER */}
        <form action="" className='max-w-sm'>
            <select
                value={genre}
                onChange={(e) => {setGenre(e.target.value as ProductFilters['genre'])}}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
                <option value="">All genres</option>
                {genres.map((genre)=>(
                    <option value={genre} key={genre}>{genre}</option>
                ))}
            </select>
        </form>

        <div className="flex items-center justify-center">
            <input 
            id="default-checkbox" 
            type="checkbox" 
            checked={longestToRead}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => {setlongestToRead(!longestToRead)}}
            />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">Least to read</label>
        </div>
        
    </div>
  )
}   
import type { Book } from '@/entities/book/model/type'
import { ProductListFilters } from '@/features/filtration';
import { fetchBooks, type ProductFilters } from '@/shared/api/bookApi';
import { BookFormList } from '@/widgets/book-list'
import { useEffect, useState } from 'react'

export const Catalog = () => {
  const [search , setSearch] = useState<ProductFilters['search']>();
  const [fetchedBook, setFetchedBook] = useState<Book[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [genre, setGenre] = useState<ProductFilters['genre']>();
  const [longestToRead , setlongestToRead] = useState<ProductFilters['longestToRead']>();

  useEffect(() => { 
    fetchBooks({search , genre , longestToRead})
      .then(setFetchedBook)
      .finally(() => setLoading(false));
  }, [{search, genre, longestToRead}]);

  if (loading) return <p>Loading books...</p>;
  
  return (
    <div className='container mx-auto min-h-screen flex flex-col items-center '>
      <ProductListFilters onChange={(filters) => {
        setSearch(filters.search)
        setGenre(filters.genre)
        setlongestToRead(filters.longestToRead)
      }} />
      <BookFormList listOfBooks={fetchedBook} />
    </div>
  )
}
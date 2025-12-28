import type { Book } from '@/entities/book/model/type';
import { Pagination } from '@/features/pagination'

type Props = {
  listOfBooks: Book[];
}

export const BookFormList = ({listOfBooks} : Props) => {
  return (
    <div className='container w-full block mx-auto flex-wrap justify-center items-center mb-10'>
      <Pagination items={listOfBooks} itemsPerPage={8} />
    </div>
  )
}

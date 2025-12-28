import { AddBook } from '@/features/add-book'

type Props = {}

export const AddBookPage = (props: Props) => {
  return (
    <div className='flex container h-screen justify-center mx-auto'>
        <AddBook />
    </div>
  )
}

import { BookCard } from "../../../entities/book";
import type { Book } from "../../../entities/book/model/type";

type ItemsProps = {
    currentItems: Book[];
  };

export const Items: React.FC<ItemsProps> = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((book : Book)=>(
            <div className='h-full' key={book.id}>
              <BookCard 
                  id={book.id} 
                  title={book.title} 
                  image={book.image} 
                  genre={book.genre} 
                  author={book.author} 
                  year={book.year} 
                  timeForReading={book.timeForReading}
                  /> 
            </div>
            ))}
      </>
    );
  };
  
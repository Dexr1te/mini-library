import { listOfBooks } from "@/shared/data/data";
import type { Book, Genre } from "@/entities/book/model/type";

export type ProductFilters = {
    genre?: Genre;
    search? : string;
    longestToRead?: boolean;
}

export async function fetchBooks(option?: ProductFilters): Promise<Book[]> {
    let filteredBooks = listOfBooks;

    if(option?.search){
        filteredBooks = filteredBooks.filter((book) => {
            return book.title.toLowerCase().includes(option.search!.toLowerCase());
        });
    }

    if(option?.genre){
        filteredBooks = filteredBooks.filter((book) => {
            return book.genre === option.genre;
        });
    }

    if (option?.longestToRead) {
        filteredBooks = [...filteredBooks].sort((prev, next) => prev.timeForReading - next.timeForReading);
      }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredBooks);
    }, 800); 
  });
}

export async function uploadBook(newBook: Omit<Book, 'id'>): Promise< Book >{
    const BookWithId: Book = {
        ...newBook,
        id: listOfBooks.length + 1
    }

    listOfBooks.push(BookWithId)

    return new Promise((resolve) => {
        setTimeout(() => {resolve(BookWithId), 500})
    })  
}
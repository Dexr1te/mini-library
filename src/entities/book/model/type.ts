export type Genre =
  | "Fantasy"
  | "Classic"
  | "Drama"
  | "Dystopian"
  | "Romance"
  | "Thriller"
  | "Philosophical Fiction"
  | "Horror"
  | "Post-apocalyptic"
  | "Psychological Thriller"
  | "Science Fiction"
  | "Historical Drama"
  | "Adventure"
  | "Mystery"
  | "Self-help";

export type Book = {
    id: number ,
    title: string,
    image: string,
    genre: Genre,
    author: string,
    year: number,
    timeForReading: number,
    description? : string,
}


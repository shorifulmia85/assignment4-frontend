// types/book.ts

export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  bookImg: string;
  description: string;
  copies: number;
  available: string;
  createdAt: string;
  updatedAt: string;
}

export interface BooksApiResponse {
  success: boolean;
  message: string;
  data: Book[];
}

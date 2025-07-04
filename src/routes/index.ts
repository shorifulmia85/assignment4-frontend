import App from "@/App";
import BookDetails from "@/components/module/books/BookDetails";
import UpdateBook from "@/components/module/books/UpdateBook";
import AddBook from "@/pages/addBook/AddBook";
import Books from "@/pages/books/Books";
import Borrow from "@/pages/borrow/Borrow";
import BorrowSummary from "@/pages/borrow/BorrowSummary";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Books,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/books/:id",
        Component: BookDetails,
      },
      {
        path: "/edit-book/:id",
        Component: UpdateBook,
      },

      {
        path: "/borrow/:bookId",
        Component: Borrow,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
    ],
  },
]);

export default router;

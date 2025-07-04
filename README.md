#  Book Management System

A simple and minimalist web application for managing books and borrowing records. Built with React, TypeScript, RTK Query, and Tailwind CSS. No authentication required — all features are publicly accessible.

---

##  Live Features Overview

###  Book Management

-  Book List Table:
  - Columns: Title, Author, Genre, ISBN, Copies, Availability, and Actions
  - Actions:
    -  Edit Book: Pre-filled form to update book info. If copies === 0, book is marked as Unavailable.
    -  Delete Book: Opens a confirmation dialog before deletion.
    - Borrow Book: Opens a simple borrow form.

-  Add New Book:
  - Fields: Title, Author, Genre, ISBN, Description, Copies, Available (optional, default: true)
  - After submission, user is redirected to the book list and the UI updates instantly.

---

###  Borrow Book

- Opened from the Borrow button beside each book.
- Fields:
  - Quantity (number)
  - Due Date (date)
- Business Logic:
  - Borrow quantity cannot exceed available copies.
  - If copies reach 0, book is automatically marked Unavailable.
  - Submits via API, shows success message, and redirects to Borrow Summary.

---

### Borrow Summary

- Aggregated list of borrowed books.
- Columns:
  - Book Title
  - ISBN
  - Total Quantity Borrowed
- Data fetched from aggregation API.

---

##  Navigation & Routing

| Path               | Description                                                  |
|--------------------|--------------------------------------------------------------|
| /books           | Displays a list of all books with view/edit/delete/borrow.   |
| /create-book     | Form interface to add a new book.                            |
| /books/:id       | Detailed view of a single book’s information.                |
| /edit-book/:id   | Interface to update book details.                            |
| /borrow/:bookId  | Borrow form for the selected book.                           |
| /borrow-summary  | Aggregated summary of borrowed books.                        |

---

##  UI Components

-  Navbar with navigation to:
  - All Books
  - Add Book
  - Borrow Summary
- Book Table/List with essential action buttons
- Responsive Forms for add/edit/borrow
   Footer with site info or credits
  Fully responsive layout (mobile / tablet / desktop)

---

## Tech Stack

- Frontend: React + TypeScript
- State Management & API: Redux Toolkit & RTK Query
- Styling: Tailwind CSS + ShadCN UI components
- Routing: React Router v6+

---

##  Project Highlights

- Clean, minimalist, and accessible UI
- Fully responsive design
- Real-time UI updates with API integration
- Clear and concise user flows

---

##  Project Structure

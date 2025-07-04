/* eslint-disable @typescript-eslint/no-explicit-any */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Book } from "@/types";
import { BookOpen, Copy, Edit, Eye, Trash2, User } from "lucide-react";
import ConfirmDelete from "@/components/custom/ConfirmDelete";
import { useDeleteBooksMutation } from "@/redux/api/books/booksApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const BooksCard = ({ book }: { book: Book }) => {
  const getGenreColor = (genre: string) => {
    const colors: Record<string, string> = {
      SCIENCE: "bg-emerald-500 hover:bg-emerald-600",
      FICTION: "bg-blue-500 hover:bg-blue-600",
      MYSTERY: "bg-purple-500 hover:bg-purple-600",
      ROMANCE: "bg-pink-500 hover:bg-pink-600",
      THRILLER: "bg-red-500 hover:bg-red-600",
      FANTASY: "bg-indigo-500 hover:bg-indigo-600",
    };
    return colors[genre?.toUpperCase()] || "bg-gray-500 hover:bg-gray-600";
  };

  const [deleteBooks, { isLoading }] = useDeleteBooksMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteBooks(id).unwrap();

      if (res?.success) {
        toast.success(res.message || "Book deleted successfully");
      }
    } catch (error: any) {
      if (error?.data?.message) {
        toast.error(error.data.message);
      } else if (error?.error) {
        toast.error(error.error);
      } else {
        toast.error("Something went wrong while deleting the book.");
      }
    }
  };

  const navigate = useNavigate();

  const sendDetailsPage = (id: string) => {
    navigate(`/books/${id}`);
  };
  const sendBorrowBookedPage = (bookId: string) => {
    navigate(`/borrow/${bookId}`);
  };

  const sendEditBookPage = (id: string) => {
    navigate(`/edit-book/${id}`);
  };

  return (
    <div className="">
      <Card className="m-0 p-0 overflow-hidden shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="relative overflow-hidden ">
            <img
              src={book?.bookImg}
              alt={`${book?.title} cover`}
              className="w-full h-56 object-cover block"
            />
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Genre Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge
              className={`${getGenreColor(
                book?.genre
              )} text-white font-medium shadow-lg`}
            >
              {book?.genre}
            </Badge>
          </div>

          {/* check copies is Available  */}
          {book?.copies >= 1 ? (
            <div className="absolute top-3 left-3">
              <Badge
                variant="outline"
                className="bg-[var(--success)] text-white"
              >
                Available
              </Badge>
            </div>
          ) : (
            <div className="absolute top-3 left-3">
              <Badge variant="destructive" className="bg-[var(--highlight)]">
                Unavailable
              </Badge>
            </div>
          )}
        </div>

        {/* Content Section */}
        <CardContent className=" space-y-4">
          {/* Title and Author */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {book?.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="w-4 h-4 text-gray-400" />
              <span className="font-medium">{book?.author}</span>
            </div>
          </div>

          {/* Rating and Read Time */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <p className="font-semibold text-[14px]">
                ISBN:{" "}
                <span className="font-medium text-gray-700">{book?.isbn}</span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Copy className="w-4 h-4" />
              <span className="text-lg">{book?.copies}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {book?.description}
          </p>
        </CardContent>

        {/* Footer Actions */}
        <CardFooter className="p-6 pt-0 bg-gray-50/50">
          <div className="flex gap-3 w-full">
            <div className="flex gap-2 flex-1">
              <Button
                onClick={() => sendDetailsPage(book?._id)}
                variant="default"
                size="sm"
                className="flex-1 bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                View
              </Button>

              <div className="flex-1">
                <Button
                  onClick={() => sendBorrowBookedPage(book?._id)}
                  disabled={book?.copies === 0}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Borrow
                </Button>
              </div>
            </div>

            <div className="flex gap-1">
              <Button
                onClick={() => sendEditBookPage(book?._id)}
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 hover:bg-gray-100"
              >
                <Edit className="w-4 h-4 text-gray-600" />
              </Button>

              <ConfirmDelete
                onConfirm={() => handleDelete(book?._id)}
                loading={isLoading}
                title="Are you sure?"
                description="This action cannot be undone!"
                trigger={
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                }
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BooksCard;

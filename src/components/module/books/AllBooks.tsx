import BooksCard from "./BooksCard";
import type { Book } from "@/types";
import ContainerBox from "@/components/container/Container";
import { useGetAllBooksQuery } from "@/redux/api/books/booksApi";
import Loading from "@/components/custom/Loading";
// adjust path if needed

const AllBooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="max-w-7xl  mx-auto text-center text-2xl lg:text-4xl mb-8 px-5 font-semibold">
        <p>
          Library Collection Discover Your <br /> Next great read
        </p>
      </div>
      <ContainerBox>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.data?.length > 0 ? (
            data.data.map((book: Book) => (
              <BooksCard key={book._id} book={book} />
            ))
          ) : (
            <p className="text-center font-medium text-[var(--danger)]">
              Today no books available
            </p>
          )}
        </div>
      </ContainerBox>
    </div>
  );
};

export default AllBooks;

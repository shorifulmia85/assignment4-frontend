import ContainerBox from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import { useGetSingleBookQuery } from "@/redux/api/books/booksApi";
import { useParams } from "react-router-dom";
import BorrowBooked from "../borrow/BorrowBookedWIthModal";
import { BookOpen } from "lucide-react";
import Loading from "@/components/custom/Loading";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetSingleBookQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContainerBox>
      <div className="bg-white p-3 rounded flex flex-col lg:flex-row  justify-between gap-10">
        <div className="border rounded p-4 mt-10 flex items-center justify-center w-full lg:w-[50%] mx-auto">
          <img
            src={data?.data?.bookImg}
            alt={`${data?.data?.title}`}
            className="h-[500px] rounded-lg "
          />
        </div>

        <div className="lg:my-20 p-3 w-full lg:w-[50%] space-y-5">
          <div className="space-y-2">
            <p className="text-4xl font-bold">{data?.data?.title}</p>
            <p className="text-xl text-gray-600 font-medium ">
              Author: <span>{data?.data?.author}</span>
            </p>
            <p className="text-xl text-gray-600 font-medium ">
              Isbn: <span>{data?.data?.isbn}</span>
            </p>
            <p className="text-xl text-gray-600 font-medium ">
              Copies: {data?.data?.copies}
            </p>
            <p className="text-xl text-gray-600 font-medium ">
              Available:{" "}
              {data?.data?.copies > 0 ? (
                <span className="text-sm text-white bg-[var(--success)] w-fit rounded-full py-0.5 px-2">
                  Available
                </span>
              ) : (
                <span className="text-sm text-white bg-[var(--highlight)] w-fit rounded-full py-0.5 px-2">
                  Unavailable
                </span>
              )}
            </p>
          </div>

          <p className="text-gray-600 text-lg">
            Description: {data?.data?.description}
          </p>

          <div className="flex items-center gap-5">
            <BorrowBooked
              bookId={data?.data?._id}
              trigger={
                <Button disabled={data?.data?.copies === 0}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Borrow
                </Button>
              }
            />
            <Button className="rounded-[3px]">Checked Borrowed</Button>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
};

export default BookDetails;

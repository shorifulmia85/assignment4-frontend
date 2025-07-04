/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerBox from "@/components/container/Container";
import Loading from "@/components/custom/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBorrowBookedQuery } from "@/redux/api/borrowApi/borrowApi";

const BorrowSummary = () => {
  const { data, isLoading } = useGetAllBorrowBookedQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContainerBox>
      <div className="mb-6">
        <h1 className="text-primary text-3xl font-bold">
          Borrowed Books Summary
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          List of all books and their total borrowed quantity
        </p>
      </div>

      <div className="bg-white rounded-lg p-3 overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-secondary">
              <TableHead className="font-medium text-[17px]">Title</TableHead>
              <TableHead className="font-medium text-[17px]">Isbn</TableHead>
              <TableHead className="font-medium text-[17px] text-right">
                Total Quantity
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: any) => (
              <TableRow key={item?.book?.isbn}>
                <TableCell className="font-medium">
                  {item?.book?.title}
                </TableCell>
                <TableCell className="font-medium">
                  {item?.book?.isbn}
                </TableCell>
                <TableCell className="font-medium text-right">
                  {item?.totalQuantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ContainerBox>
  );
};

export default BorrowSummary;

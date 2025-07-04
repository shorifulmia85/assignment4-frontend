/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/custom/Loading";
import DatePicker from "@/components/shared/DatePicker";
import MyInput from "@/components/shared/Input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useBorrowBookedMutation } from "@/redux/api/borrowApi/borrowApi";
import type { ReactNode } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type IBorrowProps = {
  bookId: string;
  trigger: ReactNode;
};

const BorrowBooked = ({ bookId, trigger }: IBorrowProps) => {
  const form = useForm();

  const [borrowBooked, { isLoading }] = useBorrowBookedMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const borrowDetails = {
      bookId,
      ...data,
    };
    try {
      const res = await borrowBooked(borrowDetails).unwrap();

      if (res?.success) {
        toast.success(res.message || "Book Borrow successfully");
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

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          {/* header  */}
          <DialogHeader>
            <DialogTitle>Borrow an New Book</DialogTitle>
          </DialogHeader>

          <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Form {...form}>
                  <MyInput name="quantity" required={true} label="Quantity" />
                  <DatePicker
                    required={true}
                    name="dueDate"
                    title="Pick a date"
                    label="Due Date"
                  />
                </Form>
              </div>
              <div className="mt-5">
                {" "}
                <DialogFooter>
                  <Button type="submit">Add Borrow</Button>
                </DialogFooter>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BorrowBooked;

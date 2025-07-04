/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerBox from "@/components/container/Container";
import DatePicker from "@/components/shared/DatePicker";
import MyInput from "@/components/shared/Input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useBorrowBookedMutation } from "@/redux/api/borrowApi/borrowApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const Borrow = () => {
  const { bookId } = useParams();
  const form = useForm();

  const [borrowBooked] = useBorrowBookedMutation();

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
  return (
    <ContainerBox>
      {" "}
      <div className="bg-white p-5 rounded-lg">
        <div className="mb-5 font-semibold text-2xl">
          <p>Add Borrow an Book</p>
        </div>
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
          <div className="flex justify-end mt-5">
            {" "}
            <Button type="submit">Add Borrow</Button>
          </div>
        </form>
      </div>
    </ContainerBox>
  );
};

export default Borrow;

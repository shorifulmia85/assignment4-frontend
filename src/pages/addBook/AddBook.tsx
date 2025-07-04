/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerBox from "@/components/container/Container";
import MyInput from "@/components/shared/Input";
import MySelect from "@/components/shared/Select";
import MyTextArea from "@/components/shared/TextArea";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateBookMutation } from "@/redux/api/books/booksApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const options = [
  {
    label: "FICTION",
    value: "FICTION",
  },
  {
    label: "NON_FICTION",
    value: "NON_FICTION",
  },
  {
    label: "SCIENCE",
    value: "SCIENCE",
  },
  {
    label: "HISTORY",
    value: "HISTORY",
  },
  {
    label: "BIOGRAPHY",
    value: "BIOGRAPHY",
  },
  {
    label: "FANTASY",
    value: "FANTASY",
  },
];

const AddBook = () => {
  const form = useForm();
  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createBook(data).unwrap();

      if (res?.success) {
        toast.success(res.message || "Book added successfully");
      }
      form.reset();
      navigate("/books");
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
      <div className="bg-white p-5 rounded-lg">
        <div className="mb-5 font-semibold text-2xl">
          <p>Add New Book</p>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-5">
              <MyInput name="title" required={true} label="Title" />
              <MyInput name="author" required={true} label="Author" />
              <MyInput name="bookImg" required={true} label="Book Image Link" />
              <MySelect
                name="genre"
                label="Genre"
                placeholder="Select an Genre"
                options={options}
                required={true}
              />
              <MyInput name="isbn" required={true} label="Isbn" type="number" />
              <MyInput
                name="copies"
                required={true}
                label="Copies"
                type="number"
              />
            </div>

            <div className="mt-3">
              <MyTextArea
                name="description"
                label="Description"
                required={true}
              />
            </div>
          </Form>

          <div className="flex justify-end mt-5">
            <Button type="submit" className="w-36" disabled={isLoading}>
              {isLoading ? "Loading..." : "Add book"}
            </Button>
          </div>
        </form>
      </div>
    </ContainerBox>
  );
};

export default AddBook;

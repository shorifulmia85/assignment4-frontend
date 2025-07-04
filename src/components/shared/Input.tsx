import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface MyInputProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
  required?: boolean;
}

const MyInput = ({
  name,
  type,
  placeholder,
  label,
  description,
  required = false,
}: MyInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      rules={required ? { required: "This field is required" } : {}}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              defaultValue={field.value ? field.value : ""}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MyInput;

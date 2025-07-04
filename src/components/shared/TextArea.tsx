import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

interface MyTextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
}

const MyTextArea = ({
  name,

  placeholder,
  label,
  description,
  required = false,
}: MyTextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div>
      <FormField
        control={control}
        rules={required ? { required: "This field is required" } : {}}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormDescription>{description}</FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
};

export default MyTextArea;

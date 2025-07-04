import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select as UISelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Option {
  label: string;
  value: string;
}

interface MySelectProps {
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
  description?: string;
  required?: boolean;
}

const MySelect = ({
  name,
  label,
  options,
  placeholder = "Select an option",
  description,
  required = false,
}: MySelectProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      rules={required ? { required: "This field is required" } : {}}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <UISelect value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </UISelect>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default MySelect;

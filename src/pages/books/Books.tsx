import AllBooks from "@/components/module/books/AllBooks";
import Hero from "@/components/module/books/Hero";
import KeyFetaures from "@/components/module/books/KeyFetaures";

const Books = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <AllBooks />
      <KeyFetaures />
    </div>
  );
};

export default Books;
